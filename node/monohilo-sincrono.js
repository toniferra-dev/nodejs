// Simulación del comportamiento de Mono Hilo en Node.js
// Módulo de node.js de lectura y escritura de archivso
// FileSystem (fs) es el módulo nativo de Node.js para trabajar con el sistema de archivos
const fs = require('node:fs');

// SISTEMA MONO HILO - SÍNCRONO
console.log('*'.repeat(50));
console.log('Inicio de la lectura sincrónica UNO');
console.log('*'.repeat(50));

const datosSincronosUno = fs.readFileSync('archivos/lectura1.txt', 'utf8');
console.log('Datos leídos sincrónicamente:', datosSincronosUno);

console.log('Fin de la lectura sincrónica UNO');

// --------------------------------------------------
console.log('\n' + '*'.repeat(50));
console.log('Trabajando en un tema importante mientras se lee el archivo...');
console.log('*'.repeat(50));
// --------------------------------------------------

// Lectura del segundo archivo
console.log('\n' + '*'.repeat(50));
console.log('Inicio de la lectura sincrónica DOS');
console.log('*'.repeat(50));

const datosSincronosDos = fs.readFileSync('archivos/lectura1.txt', 'utf8');
console.log('Datos leídos sincrónicamente:', datosSincronosDos);

console.log('Fin de la lectura sincrónica DOS');

