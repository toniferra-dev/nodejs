// Simulación del comportamiento de Mono Hilo en Node.js
// Módulo de node.js de lectura y escritura de archivso
// FileSystem (fs) es el módulo nativo de Node.js para trabajar con el sistema de archivos
const fs = require('node:fs');

// callbaks, promesas, async/await
// Node acepta las Promesas
// SISTEMA MONO HILO - ASÍNCRONO PROMESAS
console.log('\n' + '*'.repeat(50));
console.log('Inicio de la lectura asíncrona con Promesas UNO');
console.log('*'.repeat(50));

fs.promises.readFile('archivos/lectura1.txt', 'utf8')
    .then((datosAsincronosUno) => {
        console.log('Datos leídos asíncronamente con Promesas:', datosAsincronosUno);
        console.log('Fin de la lectura asíncrona con Promesas UNO');
    })

// --------------------------------------------------
console.log('\n' + '*'.repeat(50));
console.log('Trabajando en un tema importante mientras se lee el archivo asíncronamente con Promesas...');
console.log('*'.repeat(50));
// --------------------------------------------------

// SISTEMA MONO HILO - ASÍNCRONO Promesas DOS
console.log('\n' + '*'.repeat(50));
console.log('Inicio de la lectura asíncrona con Promesas DOS');
console.log('*'.repeat(50));

fs.promises.readFile('archivos/lectura1.txt', 'utf8')
    .then((datosAsincronosDos) => {
        console.log('Datos leídos asíncronamente con Promesas:', datosAsincronosDos);
        console.log('Fin de la lectura asíncrona con Promesas DOS');
    })
