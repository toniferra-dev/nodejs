// VERCEL
import { Analytics } from "@vercel/analytics/next"

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
const resultadoMultiplica = document.getElementById('resultadoMulti');
const resultadoDivide = document.getElementById('resultadoDiv'); 
const btnMultiplicar = document.getElementById('btnMultiplicar');
const btnDividir = document.getElementById('btnDividir');


// Función de un número alatorio en 0 y 99
function numeroAleatorio() {
    return Math.floor(Math.random() * 100);
}
// Cuando voy a necesitar dos numeros aleatorios, cada uno en una variables, los voy a necesitar al cargar la página y al pulsar el botón de nuevos números
let aleatorioIzq = numeroAleatorio();
let aleatorioDer = numeroAleatorio();
numeroIzq.textContent = aleatorioIzq;
numeroDer.textContent = aleatorioDer;

// Evento para el botón de nuevos números
btnNuevosNumeros.addEventListener('click', () => {
    aleatorioIzq = numeroAleatorio();
    aleatorioDer = numeroAleatorio();
    numeroIzq.textContent = aleatorioIzq;
    numeroDer.textContent = aleatorioDer;
    
    // Limpiar los resultados anteriores
    resultadoSuma.textContent = '';
    resultadoResta.textContent = '';
    resultadoMultiplica.textContent = '';
    resultadoDivide.textContent = '';
});


// Eventos de botones de operaciones
btnSumar.addEventListener('click', () => {
    const resultado = suma(aleatorioIzq, aleatorioDer);
    resultadoSuma.textContent = resultado;
});

btnRestar.addEventListener('click', () => {
    const resultado = resta(aleatorioIzq, aleatorioDer);
    resultadoResta.textContent = resultado;
});

btnMultiplicar.addEventListener('click', () => {
    const resultado = multiplica(aleatorioIzq, aleatorioDer);
    resultadoMultiplica.textContent = resultado;
});

btnDividir.addEventListener('click', () => {
    try {
        const resultado = divide(aleatorioIzq, aleatorioDer);
        resultadoDivide.textContent = resultado;
    } catch (error) {
        resultadoDivide.textContent = error.message;
    }
});