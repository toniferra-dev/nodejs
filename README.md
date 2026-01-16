# Calculadora de Números Aleatorios

Es una **calculadora web de números aleatorios** escrita en HTML, CSS y JavaScript puro (Vanilla JS).

## Funcionalidad Principal

- Genera dos números aleatorios (0-99) al cargar la página
- Botón "Generar nuevos" para obtener nuevos números
- Permite realizar 4 operaciones aritméticas básicas:
  - Sumar
  - Restar
  - Multiplicar
  - Dividir (con manejo de división por cero)

## Estructura del Proyecto

```
├── index.html                    # Página principal con UI
├── css/
│   └── index.css                 # Estilos con CSS variables y diseño grid
├── js/
│   ├── index.js                  # Lógica principal y manipulación DOM
│   └── operaciones-artimeticas.mjs  # Módulo con funciones matemáticas
└── README.md                     # Documentación básica
```

## Características Técnicas

- Módulos ES6 para organización del código
- CSS variables para personalización
- Diseño responsivo con CSS Grid
- SEO optimizado con meta tags
- Manejo de errores para división por cero
- Estilo retro con botones con sombras
