const searchLinks = require('./index');
const path = require('path');
const marked = require('marked');
const log = console.log;
const chalkColor = require('chalk');
const nodeFetch = require('node-fetch');

// Le entregamos la ruta del archivo
let file = process.argv[2];
// if (file.slice(-3) === '.md') {
//     log(chalkColor.bold.blue('Archivo encontrado'));
//     return;
// }

// Convertir ruta en absoluta
file = path.resolve(file);
// Normaliza errores
file = path.normalize(file);

//Buscar links en el archivo

searchLinks(file)
    .then((data) => {
        let renderer = new marked.Renderer();
        let links = [];
        renderer.link = function(href, text) {
            links.push({
                href: href,
                text: text,
                file: file,
                get file() {
                    return file;
                },
                set file(value) {
                    file = value;
                },
            });
        };
        marked(data, {
            renderer: renderer
        });
        let getlinks = prefixLinks(links);
        let allLinks = statusLink(getlinks);


        let flags = process.argv[3];
        let flags2 = process.argv[4];
        // if (flags === 'undefined' && flags === 'undefined') {
        //     log(chalkColor.bold.blue('Intenta con --validate o --stats'));
        // } else 
        if (flags === '--validate') {
            statsLinks(getlinks);
            return;
        } else if (flags === '--stats') {

            return allLinks;
        } else if ((flags === '--stats' && flags2 === '--validate') ||
            (flags2 === "--stats" && flags === "--validate")) {
            return allLinks(statsLinks);
        }
    })
    // .catch((error) => {
    //     log(error);
    // })

//Función Prefijos válidos
const prefixLinks = (links) => {
    let validLink = [];
    links.forEach((element) => {
        //Buscar los prefijos que tengan 4 elementos
        let prefix = element.href.substring(0, 4);
        // Si es igual a http valida el link y agregalo
        if (prefix === 'http') {
            validLink.push(element);
        }
    })
    return validLink;
}


//Mostrar status de los links a los usuarios

const statusLink = (links) => {
    links.forEach((element) => {
        nodeFetch(element.href)
            .then(response => {
                if (response.status === 200) {
                    log(chalkColor.green('[✔]'),
                        chalkColor.cyan(element.href)
                    );
                } else if (response.status === 404) {
                    log(chalkColor.bold.red('[Error 404]'),
                        chalkColor.bgBlue(element.href)

                    );
                }
            }).catch((error) =>
                log(chalkColor.bold.red('[Error]'),
                    chalkColor.bgMagenta(element.href + error)

                )

            );
    })
}

//Contar links

let ok = 0;
let broke = 0;

const statsLinks = (links) => {

    let promises = links.map(response => nodeFetch(response).then(function(response) {
        if (response.status === 200) {
            return ok++
        } else if (response.status !== 200) {
            return broke++
        }
    }))
    return Promise.all(promises)

    .then(r => log(chalkColor.cyanBright('Links totales: ') + chalkColor.bold.yellowBright(broke + ok)))
        .then(r => log(chalkColor.green('Links Válidos: ') + chalkColor.bold.green(ok)))
        .then(r => log(chalkColor.redBright('Links Inválidos: ') + chalkColor.bold.redBright(broke)))

}