# Show Markdown Links

## Índice

* [1. Show Markdown-Links](#1-show-markdown-links)
* [2. Instalación](#2-instalación)
* [3. Uso](#3-uso)
* [4. Herramientas y Librerias Utilizadas](#4-herramientas-y-librerias-utilizadas)
* [5. Autor](#5-autor)

***

## 1. Show Markdown-Links 🔗

![show-markdown-links](img/show-md.png)


**¿Qué es Show Markdown Links**

Show Markdown Links es una librería que lee y analiza archivos en formato **MARKDOWN**. Verifica los links que contenga el archivo .md, muestra su estado y cuenta tanto el total de los enlaces, como los que son válidos y los que no.

Puedes conocerla y probarla [aquí](https://www.npmjs.com/package/show-markdown-links).

## 2. Instalación 🚀

Para utilizar Show Markdown Links debes:
 1.- instalar [Node.js](https://nodejs.org/) usando el comando
```
npm install
```
2.- Instalar Show Markdown Links con el siguiente comando:
```
npm i show-markdown-links
npm intall show-markdown-links
```
Y listo! ya puedes comenzar a usarlo.

## 3. Uso 💻

Si sólo quieres ver los links extraidos de tus archivos .md tienes dos opciones, uno analizara el archivo especifico y el otro algún directorio:
Puedes extraer todos los links presentes en tu archivo o directorio con la siguiente línea

```
npm show-markdown-links nombredetuarchivo.md
npm show-markdown-links ./ (Directorio actual)
```
A un costado de tus enlaces se mostrará con un ticket (✔) si el enlace está disponible, con *Error 404* si corresponde o con *Error* en cualquier otro caso.


Puedes utilizar la opción disponibles pa el conteo resumido de los links en los que encontrarás los válidos, inválidos y el total.
Para esto, intenta con éstas líneas en tu terminal:

```
npm show-markdown-links nombredetuarchivo.md --validate

npm show-markdown-links ./ (Directorio actual) --validate

```


## 4. Herramientas y Librerias Utilizadas 🛠️

* [Git y GitHub](https://github.com/aneacevedo/SCL014-md-links) – Para el repositorio e issues.
* [Node](https://nodejs.org/es) – Para el entorno de ejecución de JavaScript.
* [Node](https://www.npmjs.com/) – Para versiones e instalación.
* [Fetch](https://www.npmjs.com/package/fetch) – Para extraer el contenido de los links/urls.
* [Marked](https://www.npmjs.com/package/marked) – Para compilar.
* [Chalk](https://www.npmjs.com/package/chalk) – Para colorear y destacar los resultados de la ejecución.

## 5. Autor ✒️

* **Anelisse Acevedo** [GitHub](https://github.com/aneacevedo) :octocat: - Front-end Developer.