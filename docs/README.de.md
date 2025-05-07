# 🧠 Matrix Rain 🌧️

> *"Unglücklicherweise kann niemand erklären, was die Matrix ist. Du musst es selbst sehen."* - Morpheus

Terminalbasierte Matrix-Digitalregen-Animation, die den ikonischen "Digitalregen"-Effekt aus den Matrix-Filmen direkt in Ihr Terminal bringt. Wähle die rote Pille 💊 und sieh, wie tief das Kaninchenloch geht...

*In anderen Sprachen lesen: [English](README.en.md), [Português](README.pt-br.md), [Español](README.es.md), [Français](README.fr.md), [Deutsch](README.de.md), [中文](README.zh.md), [日本語](README.ja.md), [Русский](README.ru.md), [العربية](README.ar.md), [हिन्दी](README.hi.md)*

## ✨ Funktionen

- 📊 Faszinierende fallende Matrix-Zeichen (Katakana, Zahlen und Buchstaben)
- 💬 Zentrierte Nachrichtenanzeige ("THE MATRIX HAS YOU")
- ⏯️ Pause/Fortsetzung mit der Leertaste (Zeit in der Matrix einfrieren)
- 📝 Unterstützung für benutzerdefinierte Anfangsnachrichten (sei dein eigenes Orakel)
- 🔄 Nachrichtenanzeige-API zur Erstellung von zeitgesteuerten Sequenzen oder interaktiven Anzeigen
- 🐇 Folge dem weißen Kaninchen mit interaktiven Steuerungselementen

## 💾 Installation

```bash
# Befreie deinen Geist...
git clone https://github.com/frederico-kluser/the-matrix-rain.git
cd the-matrix-rain
npm install
```

## 🕹️ Verwendung

### Grundlegende Verwendung

Die Funktion `matrixRain` gibt ein Promise zurück, daher muss sie mit async/await oder Promise-Ketten verwendet werden:

```javascript
const matrixRain = require('the-matrix-rain');

// Beispiel mit async/await (Es gibt keinen Löffel)
async function startMatrix() {
  // Mit Standard-Nachricht "WAKE UP NEO" oder benutzerdefinierter Nachricht starten
  const matrix = await matrixRain();  // oder await matrixRain("BENUTZERDEFINIERTE NACHRICHT");

  // Eine benutzerdefinierte Nachricht anzeigen
  matrix.display("THE MATRIX HAS YOU");

  // Animation beenden, wenn fertig (Konstrukt verlassen)
  matrix.stop();
}

// Asynchrone Funktion aufrufen
startMatrix();

// Alternative mit Promise-Syntax (Denk daran... alles, was ich anbiete, ist die Wahrheit)
matrixRain().then(matrix => {
  matrix.display("THE MATRIX HAS YOU");
  
  // Später die Animation stoppen
  setTimeout(() => matrix.stop(), 5000);
});
```

### NPM-Skripte

Das Projekt enthält mehrere npm-Skripte zum Ausführen von Beispielen:

```bash
# Grundbeispiel ausführen (Blaue-Pillen-Option)
npm run example:basic

# Mit benutzerdefinierter Anfangsnachricht ausführen (Sprich wie das Orakel)
npm run example:custom

# Eine zeitgesteuerte Sequenz von Nachrichten ausführen (Wie ein Gespräch mit dem Architekten)
npm run example:sequence

# Interaktiven Modus ausführen - Nachrichten zum Anzeigen eingeben (Sei dein eigener Agent)
npm run example:interactive

# Mit zufälligen Matrix-Zitaten ausführen (Wie ein Déjà-vu in der Matrix)
npm run example:quotes

# Verfügbare Beispiele auflisten (Was wäre, wenn ich dir sagen würde...)
npm run examples
```

## 🧪 Beispiele

Das Verzeichnis `/examples` enthält verschiedene Demos, die unterschiedliche Möglichkeiten zur Verwendung der Matrix-Rain-Animation zeigen.
Du kannst diese Beispiele mit den oben aufgeführten npm-Skripten ausführen.

- `examples/basic.js` - Einfaches Beispiel mit Standardanfangsnachricht
- `examples/custom-initial.js` - Beispiel für benutzerdefinierte Anfangsnachricht (wie das Wählen deiner eigenen roten Pille)
- `examples/timed-sequence.js` - Zeitgesteuerte Sequenz von Nachrichten (Glitches in der Matrix)
- `examples/interactive.js` - Nachrichten während der Ausführung eingeben (sei der Auserwählte)
- `examples/random-quotes.js` - Zeigt zufällige Zitate aus dem Matrix-Film (Weisheit aus Zion)

Jedes Beispiel demonstriert verschiedene Funktionen der Matrix-Rain-Animation. Um ein Beispiel direkt auszuführen:

```bash
node examples/interactive.js
```

## 🔌 API

### matrixRain([initialMessage])

Startet die Matrix-Regen-Animation.

- `initialMessage` (optional): Benutzerdefinierte Nachricht, die anfangs angezeigt werden soll (Standard: "WAKE UP NEO")
- Gibt zurück: Promise, das zu einem Objekt mit den Methoden `display` und `stop` aufgelöst wird

### matrix.display(message)

Zeigt eine Nachricht in der Mitte des Bildschirms an (wie ein Glitch in der Matrix).

- `message`: Anzuzeigende Zeichenfolge

### matrix.stop()

Stoppt die Animation und bereinigt das Terminal (Matrix verlassen).

## 🎮 Steuerung

- `Leertaste`: Animation pausieren/fortsetzen (Matrix einfrieren)
- `M`: Nachricht "MATRIX HAS YOU" anzeigen (Déjà-vu spüren)
- `Strg+C`: Anwendung beenden (die blaue Pille nehmen)

## 🔓 Lizenz

MIT

---

> *"Ich kenne Kung Fu."* - Neo