🧮 Calculadora Web Interactiva
Una calculadora web moderna y funcional con diseño atractivo y soporte para entrada por teclado. Este proyecto implementa una calculadora completa con operaciones básicas, interfaz responsiva y efectos visuales.

📁 Estructura del Proyecto
text
📂 calculadora-web/

├── index.html      # Estructura HTML de la calculadora

├── style.css       # Estilos CSS con diseño moderno

├── script.js       # Lógica JavaScript de la calculadora

└── README.md       # Este archivo

✨ Características
🎨 Diseño Moderno
Fondo degradado dinámico con colores vibrantes

Efectos de vidrio esmerilado (glassmorphism) en la calculadora

Animaciones y transiciones suaves en botones

Diseño responsivo que se adapta a dispositivos móviles

Efecto de ripple al hacer clic en botones

⚙️ Funcionalidades de la Calculadora
Operaciones básicas: Suma (+), Resta (×), Multiplicación (×), División (÷)

Funciones adicionales:

Porcentaje (%)

Borrar último dígito (⌫)

Limpiar todo (C)

Punto decimal (.)

Soporte completo para teclado

Pantalla dual que muestra operación actual y resultado anterior

Validación contra división por cero

🚀 Cómo Usar
Opción 1: Abrir en el navegador
Descarga o clona el proyecto

Abre el archivo index.html en cualquier navegador moderno

¡La calculadora está lista para usar!

Opción 2: Servidor local (recomendado para desarrollo)
bash
# Con Python
python -m http.server 8000

# Con Node.js y http-server
npx http-server
Luego abre http://localhost:8000 en tu navegador.

🎯 Controles
Ratón/Táctil
Haz clic en los botones numéricos (0-9) para ingresar números

Haz clic en los operadores (+, −, ×, ÷) para seleccionar operaciones

Usa los botones especiales:

C - Limpiar todo

⌫ - Borrar último dígito

% - Porcentaje

= - Calcular resultado

Teclado
Números 0-9 - Ingresar dígitos

Operadores:

+ - Suma

- - Resta

* - Multiplicación

/ - División

Funciones especiales:

. - Punto decimal

Enter o = - Calcular

Escape - Limpiar todo

Backspace - Borrar último dígito

📱 Diseño Responsivo
La calculadora se adapta automáticamente:

Escritorio: Diseño amplio con botones grandes

Tablet: Ajuste automático de tamaño

Móvil (≤480px): Botones más compactos, fuentes optimizadas

🔧 Detalles Técnicos
Variables de Estado (script.js)
javascript
let currentOperand = '0';      // Operando actual
let previousOperand = '';      // Operando anterior
let operation = null;          // Operación seleccionada
let resetScreen = false;       // Control de reset de pantalla
Funciones Principales
appendNumber(number) - Agrega números o punto decimal

chooseOperation(op) - Selecciona operación matemática

calculate() - Realiza el cálculo con validación

updateDisplay() - Actualiza la pantalla de la calculadora

clearAll() - Reinicia toda la calculadora

deleteLast() - Elimina el último dígito

percentage() - Calcula porcentaje

Estructura HTML
Contenedor principal: Layout centrado

Pantalla: Dos líneas (operación anterior y actual)

Botones: Organizados en grid 4×5 con clases específicas

Estilos CSS
Efecto glassmorphism: backdrop-filter: blur(10px)

Grid CSS: grid-template-columns: repeat(4, 1fr)

Animaciones: Efecto ripple en botones

Gradientes: Fondo dinámico con múltiples colores

🐛 Manejo de Errores
División por cero: Muestra alerta y previene el cálculo

Múltiples puntos decimales: Evita ingresar más de un punto

Pantalla de resultado: Limpia automáticamente después de un cálculo

Entrada vacía: Valida antes de realizar operaciones

🎨 Personalización
Cambiar Colores
En style.css puedes modificar:

css
/* Fondo degradado */
background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);

/* Color de operadores */
background: rgba(255, 140, 0, 0.3);

/* Color de igual */
background: rgba(0, 150, 0, 0.4);

/* Color de limpiar */
background: rgba(220, 20, 60, 0.4);
Cambiar Tamaños
css
/* Tamaño máximo de la calculadora */
max-width: 350px;

/* Tamaño de fuente de botones */
font-size: 1.3rem;

/* Padding de botones */
padding: 18px 0;
🔄 Posibles Mejoras
Historial de operaciones - Mostrar últimas operaciones realizadas

Operaciones avanzadas - Raíz cuadrada, potencias, funciones trigonométricas

Temas intercambiables - Claro/oscuro o personalizados

Memoria - Botones M+, M-, MR, MC

Modo científico - Desplegar más operaciones matemáticas

Sonidos - Retroalimentación auditiva al presionar botones

Exportar/importar - Guardar operaciones en localStorage

Soporte para expresiones complejas - Paréntesis y prioridad de operaciones

🧪 Pruebas
La calculadora incluye:

✅ Entrada por teclado y ratón

✅ Validación de entrada

✅ Diseño responsivo

✅ Efectos visuales

✅ Manejo de errores básicos

📋 Requisitos del Sistema
Navegador moderno (Chrome 80+, Firefox 75+, Safari 13+, Edge 80+)

JavaScript habilitado

No se requieren dependencias externas

📝 Notas del Desarrollador
El código está completamente comentado para facilitar la comprensión

Usa ES6+ JavaScript sin dependencias externas

La estructura es modular y fácil de extender

Compatible con todos los navegadores modernos

Autor: Proyecto de práctica en JavaScript
Tecnologías: HTML5, CSS3, JavaScript (ES6+)
Propósito: Demostración de interfaz de usuario interactiva
Nivel: Intermedio - Integración de HTML, CSS y JavaScript

Licencia: Uso educativo y personal libre

