# 🧠 Matrix Rain 🌧️

> *"Desafortunadamente, nadie puede ser informado sobre qué es Matrix. Tienes que verlo por ti mismo."* - Morpheus

Animación de lluvia digital de Matrix basada en terminal que trae el icónico efecto "lluvia digital" de las películas Matrix directamente a tu terminal. Elige la píldora roja 💊 y comprueba cuán profundo es el agujero del conejo...

*Leer en otros idiomas: [English](README.en.md), [Português](README.pt-br.md), [Español](README.es.md), [Français](README.fr.md), [Deutsch](README.de.md), [中文](README.zh.md), [日本語](README.ja.md), [Русский](README.ru.md), [العربية](README.ar.md), [हिन्दी](README.hi.md)*

## ✨ Características

- 📊 Hipnotizantes caracteres estilo Matrix cayendo (katakana, números y letras)
- 💬 Visualización de mensajes centrados ("THE MATRIX HAS YOU")
- ⏯️ Pausa/reanudación con la barra espaciadora (congela el tiempo en Matrix)
- 📝 Soporte para mensajes iniciales personalizados (sé tu propio Oráculo)
- 🔄 API de visualización de mensajes para crear secuencias temporizadas o pantallas interactivas
- 🐇 Sigue al conejo blanco con controles interactivos

## 💾 Instalación

### Como Herramienta de Línea de Comandos Global

```bash
# Instalar globalmente
npm install -g the-matrix-rain

# Ejecutar la animación Matrix rain
matrix-rain

# Ejecutar con un mensaje personalizado
matrix-rain "FOLLOW THE WHITE RABBIT"

# Mostrar citas aleatorias de Matrix
matrix-rain --random

# Ejecutar en modo interactivo
matrix-rain --interactive

# Ejecutar por un tiempo específico (en segundos)
matrix-rain --time 30

# Para ayuda y más opciones
matrix-rain --help
```

> **Nota**: Después de instalar globalmente, el comando `matrix-rain` estará disponible desde cualquier terminal. ¡No es necesario ejecutar `node index.js` manualmente!

### Como Dependencia de Proyecto

```bash
# Añadir a tu proyecto
npm install the-matrix-rain

# O
yarn add the-matrix-rain
```

### Desde el Código Fuente

```bash
# Libera tu mente...
git clone https://github.com/frederico-kluser/the-matrix-rain.git
cd the-matrix-rain
npm install
```

## 🕹️ Uso

### Opciones de Línea de Comandos

Cuando se instala globalmente, puedes usar las siguientes opciones de línea de comandos:

```bash
# Ejecutar con el mensaje predeterminado "WAKE UP NEO"
matrix-rain

# Ejecutar con mensaje personalizado
matrix-rain "FOLLOW THE WHITE RABBIT"

# Ejecutar por un tiempo específico (en segundos)
matrix-rain --time 30

# Mostrar citas aleatorias de Matrix
matrix-rain --random

# Modo interactivo - escribe mensajes para mostrar
matrix-rain --interactive

# Mostrar ayuda
matrix-rain --help
```

### Uso Básico

La función `matrixRain` devuelve una Promesa, por lo que debe usarse con async/await o cadenas de Promesas:

```javascript
const matrixRain = require('the-matrix-rain');

// Ejemplo con async/await (No hay cuchara)
async function startMatrix() {
  // Comienza con el mensaje predeterminado "WAKE UP NEO" o un mensaje personalizado
  const matrix = await matrixRain();  // o await matrixRain("MENSAJE PERSONALIZADO");

  // Muestra un mensaje personalizado
  matrix.display("THE MATRIX HAS YOU");

  // Detiene la animación cuando termina (salir de la construcción)
  matrix.stop();
}

// Llama a la función asíncrona
startMatrix();

// Alternativa usando sintaxis de Promesa (Recuerda... todo lo que ofrezco es la verdad)
matrixRain().then(matrix => {
  matrix.display("THE MATRIX HAS YOU");
  
  // Más tarde, detiene la animación
  setTimeout(() => matrix.stop(), 5000);
});
```

### Scripts NPM

El proyecto incluye varios scripts npm para ejecutar ejemplos:

```bash
# Ejecuta el ejemplo básico (opción píldora azul)
npm run example:basic

# Ejecuta con mensaje inicial personalizado (Habla como el Oráculo)
npm run example:custom

# Ejecuta una secuencia temporizada de mensajes (Como hablar con el Arquitecto)
npm run example:sequence

# Ejecuta el modo interactivo - escribe mensajes para mostrar (Sé tu propio Agente)
npm run example:interactive

# Ejecuta con citas aleatorias de Matrix (Como un déjà vu en Matrix)
npm run example:quotes

# Lista ejemplos disponibles (¿Y si te dijera...?)
npm run examples
```

## 🧪 Ejemplos

El directorio `/examples` contiene varias demostraciones que muestran diferentes formas de usar la animación Matrix Rain.
Puedes ejecutar estos ejemplos usando los scripts npm enumerados anteriormente.

- `examples/basic.js` - Ejemplo simple con mensaje inicial predeterminado
- `examples/custom-initial.js` - Ejemplo de mensaje inicial personalizado (como elegir tu propia píldora roja)
- `examples/timed-sequence.js` - Secuencia temporizada de mensajes (fallos en Matrix)
- `examples/interactive.js` - Escribe mensajes para mostrar mientras se ejecuta (sé el Elegido)
- `examples/random-quotes.js` - Muestra citas aleatorias de la película Matrix (sabiduría de Sion)

Cada ejemplo demuestra diferentes características de la animación Matrix Rain. Para ejecutar un ejemplo directamente:

```bash
node examples/interactive.js
```

## 🔌 API

### matrixRain([initialMessage])

Inicia la animación de lluvia de Matrix.

- `initialMessage` (opcional): Mensaje personalizado para mostrar inicialmente (predeterminado: "WAKE UP NEO")
- Devuelve: Promesa que se resuelve en un objeto con métodos `display` y `stop`

### matrix.display(message)

Muestra un mensaje en el centro de la pantalla (como un fallo en Matrix).

- `message`: Cadena para mostrar

### matrix.stop()

Detiene la animación y limpia la terminal (salir de Matrix).

## 🎮 Controles

- `Espacio`: Pausar/reanudar la animación (congelar Matrix)
- `M`: Mostrar mensaje "MATRIX HAS YOU" (sentir el déjà vu)
- `Ctrl+C`: Salir de la aplicación (toma la píldora azul)

## 🔓 Licencia

MIT

---

> *"Conozco kung fu."* - Neo