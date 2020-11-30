const fs = require('fs');
const log = console.log;


//Archivo Markdown
const mdLink = (path) => {
    if (path.slice(-3) == '.md') {
        log(path('Archivo encontrado'));
    } else {
        log('Este archivo no es del tipo Markdown');
    };
    return mdLink;
};

// Lectura de archivos

const readingFile = (file => {
    let promise = new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8', (error, data) => {
            if (error) {
                reject(new Error('Archivo no encontrado'));
            }
            resolve(data);
        });
    });
    return promise;
});

module.exports = readingFile;