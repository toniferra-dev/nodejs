// Importar las funciones desde el módulo de operaciones aritméticas
import { suma, resta, multiplica, divide } from './operaciones-artimeticas.mjs';


// Seleccionar los elementos del DOM
// Zona numeros aleatorios
const numeroIzq = document.getElementById('numeroIzq');
const numeroDer = document.getElementById('numeroDer');

// Zona botón nuevos números
const btnNuevosNumeros = document.getElementById('btnNuevosNumeros');

// Zona botones y resultados Sumar y Restar
const resultadoSuma = document.getElementById('resultadoSuma');
const resultadoResta = document.getElementById('resultadoResta');
const btnSumar = document.getElementById('btnSumar');
const btnRestar = document.getElementById('btnRestar');

// Zona botones y resultados Multiplicar y Dividir
const resultadoMultiplica = document.getElementById('resultadoMultiplica');
const resultadoDivide = document.getElementById('resultadoDivide'); 
const btnMultiplicar = document.getElementById('btnMultiplicar');
const btnDividir = document.getElementById('btnDividir');


