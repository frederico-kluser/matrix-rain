# 🧠 Matrix Rain 🌧️

![Matrix Rain Demo](../demo.gif)

> _"Malheureusement, personne ne peut expliquer ce qu'est la Matrice. Tu dois le voir par
> toi-même."_ - Morpheus

Animation de pluie numérique Matrix en terminal qui reproduit l'emblématique effet "pluie numérique"
des films Matrix directement dans votre terminal. Choisissez la pilule rouge 💊 et voyez jusqu'où va
le terrier du lapin...

_Lire dans d'autres langues : [English](README.en.md), [Português](README.pt-br.md),
[Español](README.es.md), [Français](README.fr.md), [Deutsch](README.de.md), [中文](README.zh.md),
[日本語](README.ja.md), [Русский](README.ru.md), [العربية](README.ar.md), [हिन्दी](README.hi.md)_

## ✨ Fonctionnalités

- 📊 Caractères hypnotisants style Matrix qui tombent (katakana, chiffres et lettres)
- 💬 Affichage de messages centrés ("THE MATRIX HAS YOU")
- ⏯️ Pause/reprise avec la barre d'espace (figer le temps dans la Matrice)
- 📝 Support de message initial personnalisé (soyez votre propre Oracle)
- 🔄 API d'affichage de messages pour créer des séquences chronométrées ou des affichages
  interactifs
- 🐇 Suivez le lapin blanc avec des contrôles interactifs

## 💾 Installation

### Comme un Outil en Ligne de Commande Global

```bash
# Installer globalement
npm install -g the-matrix-rain

# Exécuter l'animation Matrix rain
matrix-rain

# Exécuter avec un message personnalisé
matrix-rain "FOLLOW THE WHITE RABBIT"

# Afficher des citations aléatoires de Matrix
matrix-rain --random

# Exécuter en mode interactif
matrix-rain --interactive

# Exécuter pendant une durée spécifique (en secondes)
matrix-rain --time 30

# Pour l'aide et plus d'options
matrix-rain --help
```

> **Remarque** : Après l'installation globale, la commande `matrix-rain` sera disponible depuis
> n'importe quel terminal. Pas besoin d'exécuter `node index.js` manuellement !

### Comme Dépendance de Projet

```bash
# Ajouter à votre projet
npm install the-matrix-rain

# OU
yarn add the-matrix-rain
```

### Depuis les Sources

```bash
# Libérez votre esprit...
git clone https://github.com/frederico-kluser/the-matrix-rain.git
cd the-matrix-rain
npm install
```

## 🕹️ Utilisation

### Options de Ligne de Commande

Lorsqu'il est installé globalement, vous pouvez utiliser les options de ligne de commande suivantes
:

```bash
# Exécuter avec le message par défaut "WAKE UP NEO"
matrix-rain

# Exécuter avec un message personnalisé
matrix-rain "FOLLOW THE WHITE RABBIT"

# Exécuter pendant une durée spécifique (en secondes)
matrix-rain --time 30

# Afficher des citations aléatoires de Matrix
matrix-rain --random

# Mode interactif - tapez des messages à afficher
matrix-rain --interactive

# Afficher l'aide
matrix-rain --help
```

### Utilisation basique

La fonction `matrixRain` renvoie une Promise, elle doit donc être utilisée avec async/await ou des
chaînes de Promise :

```javascript
const matrixRain = require('the-matrix-rain');

// Exemple avec async/await (Il n'y a pas de cuillère)
async function startMatrix() {
  // Commencer avec le message par défaut "WAKE UP NEO" ou un message personnalisé
  const matrix = await matrixRain(); // ou await matrixRain("MESSAGE PERSONNALISÉ");

  // Afficher un message personnalisé
  matrix.display('THE MATRIX HAS YOU');

  // Arrêter l'animation lorsque c'est terminé (quitter la construction)
  matrix.stop();
}

// Appeler la fonction asynchrone
startMatrix();

// Alternative utilisant la syntaxe Promise (Souvenez-vous... tout ce que j'offre est la vérité)
matrixRain().then(matrix => {
  matrix.display('THE MATRIX HAS YOU');

  // Plus tard, arrêter l'animation
  setTimeout(() => matrix.stop(), 5000);
});
```

### Scripts NPM

Le projet inclut plusieurs scripts npm pour exécuter des exemples :

```bash
# Exécuter l'exemple basique (option pilule bleue)
npm run example:basic

# Exécuter avec un message initial personnalisé (Parler comme l'Oracle)
npm run example:custom

# Exécuter une séquence chronométrée de messages (Comme parler avec l'Architecte)
npm run example:sequence

# Exécuter le mode interactif - taper des messages à afficher (Soyez votre propre Agent)
npm run example:interactive

# Exécuter avec des citations aléatoires de Matrix (Comme un déjà vu dans la Matrice)
npm run example:quotes

# Lister les exemples disponibles (Et si je vous disais...)
npm run examples
```

## 🧪 Exemples

Le répertoire `/examples` contient diverses démonstrations montrant différentes façons d'utiliser
l'animation Matrix Rain. Vous pouvez exécuter ces exemples à l'aide des scripts npm listés
ci-dessus.

- `examples/basic.js` - Exemple simple avec message initial par défaut
- `examples/custom-initial.js` - Exemple de message initial personnalisé (comme choisir votre propre
  pilule rouge)
- `examples/timed-sequence.js` - Séquence chronométrée de messages (bugs dans la Matrice)
- `examples/interactive.js` - Tapez des messages à afficher pendant l'exécution (soyez l'Élu)
- `examples/random-quotes.js` - Affiche des citations aléatoires du film Matrix (sagesse de Zion)

Chaque exemple démontre différentes fonctionnalités de l'animation Matrix Rain. Pour exécuter un
exemple directement :

```bash
node examples/interactive.js
```

## 🔌 API

### matrixRain([initialMessage])

Démarre l'animation de pluie Matrix.

- `initialMessage` (optionnel) : Message personnalisé à afficher initialement (par défaut : "WAKE UP
  NEO")
- Retourne : Promise se résolvant en un objet avec les méthodes `display` et `stop`

### matrix.display(message)

Affiche un message au centre de l'écran (comme un bug dans la Matrice).

- `message` : Chaîne à afficher

### matrix.stop()

Arrête l'animation et nettoie le terminal (quitter la Matrice).

## 🎮 Contrôles

- `Espace` : Mettre en pause/reprendre l'animation (geler la Matrice)
- `M` : Afficher le message "MATRIX HAS YOU" (ressentir le déjà vu)
- `Ctrl+C` : Quitter l'application (prendre la pilule bleue)

## 🔓 Licence

MIT

---

> _"Je connais le kung-fu."_ - Neo
