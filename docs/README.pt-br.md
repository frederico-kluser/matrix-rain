# 🧠 Matrix Rain 🌧️

> *"Infelizmente, ninguém pode ser informado sobre o que é Matrix. Você tem que ver por si mesmo."* - Morpheus

Animação terminal de chuva digital Matrix que traz o icônico efeito "chuva digital" dos filmes Matrix diretamente para o seu terminal. Escolha a pílula vermelha 💊 e veja até onde vai a toca do coelho...

*Leia em outros idiomas: [English](README.en.md), [Português](README.pt-br.md), [Español](README.es.md), [Français](README.fr.md), [Deutsch](README.de.md), [中文](README.zh.md), [日本語](README.ja.md), [Русский](README.ru.md), [العربية](README.ar.md), [हिन्दी](README.hi.md)*

## ✨ Recursos

- 📊 Fascinantes caracteres estilo Matrix caindo (katakana, números e letras)
- 💬 Exibição de mensagens centralizadas ("THE MATRIX HAS YOU")
- ⏯️ Pausar/continuar com a barra de espaço (congele o tempo na Matrix)
- 📝 Suporte a mensagem inicial personalizada (seja seu próprio Oráculo)
- 🔄 API de exibição de mensagens para criar sequências temporizadas ou displays interativos
- 🐇 Siga o coelho branco com controles interativos

## 💾 Instalação

### Como uma Ferramenta de Linha de Comando Global

```bash
# Instalar globalmente
npm install -g the-matrix-rain

# Executar a animação Matrix rain
matrix-rain

# Executar com uma mensagem personalizada
matrix-rain "FOLLOW THE WHITE RABBIT"

# Mostrar citações aleatórias da Matrix
matrix-rain --random

# Executar em modo interativo
matrix-rain --interactive

# Executar por um tempo específico (em segundos)
matrix-rain --time 30

# Para ajuda e mais opções
matrix-rain --help
```

> **Observação**: Após instalar globalmente, o comando `matrix-rain` estará disponível em qualquer terminal. Não é necessário executar `node index.js` manualmente!

### Como uma Dependência de Projeto

```bash
# Adicionar ao seu projeto
npm install the-matrix-rain

# OU
yarn add the-matrix-rain
```

### Do Código-fonte

```bash
# Liberte sua mente...
git clone https://github.com/frederico-kluser/the-matrix-rain.git
cd the-matrix-rain
npm install
```

## 🕹️ Uso

### Opções de Linha de Comando

Quando instalado globalmente, você pode usar as seguintes opções de linha de comando:

```bash
# Executar com a mensagem padrão "WAKE UP NEO"
matrix-rain

# Executar com mensagem personalizada
matrix-rain "FOLLOW THE WHITE RABBIT"

# Executar por um tempo específico (em segundos)
matrix-rain --time 30

# Mostrar citações aleatórias da Matrix
matrix-rain --random

# Modo interativo - digite mensagens para exibir
matrix-rain --interactive

# Mostrar ajuda
matrix-rain --help
```

### Uso Básico

A função `matrixRain` retorna uma Promise, então deve ser usada com async/await ou encadeamento de Promises:

```javascript
const matrixRain = require('the-matrix-rain');

// Exemplo com async/await (Não existe colher)
async function startMatrix() {
  // Inicia com a mensagem padrão "WAKE UP NEO" ou mensagem personalizada
  const matrix = await matrixRain();  // ou await matrixRain("MENSAGEM PERSONALIZADA");

  // Exibe uma mensagem personalizada
  matrix.display("THE MATRIX HAS YOU");

  // Para a animação quando terminar (saia da construção)
  matrix.stop();
}

// Chama a função assíncrona
startMatrix();

// Alternativa usando sintaxe de Promise (Lembre-se... tudo que ofereço é a verdade)
matrixRain().then(matrix => {
  matrix.display("THE MATRIX HAS YOU");
  
  // Mais tarde, pare a animação
  setTimeout(() => matrix.stop(), 5000);
});
```

### Scripts NPM

O projeto inclui vários scripts npm para executar exemplos:

```bash
# Execute o exemplo básico (opção pílula azul)
npm run example:basic

# Execute com mensagem inicial personalizada (Fale como o Oráculo)
npm run example:custom

# Execute uma sequência temporizada de mensagens (Como falar com o Arquiteto)
npm run example:sequence

# Execute o modo interativo - digite mensagens para exibir (Seja seu próprio Agente)
npm run example:interactive

# Execute com citações aleatórias de Matrix (Como déjà vu na Matrix)
npm run example:quotes

# Liste os exemplos disponíveis (E se eu te dissesse...)
npm run examples
```

## 🧪 Exemplos

O diretório `/examples` contém várias demonstrações mostrando diferentes maneiras de usar a animação Matrix Rain.
Você pode executar esses exemplos usando os scripts npm listados acima.

- `examples/basic.js` - Exemplo simples com mensagem inicial padrão
- `examples/custom-initial.js` - Exemplo de mensagem inicial personalizada (como escolher sua própria pílula vermelha)
- `examples/timed-sequence.js` - Sequência temporizada de mensagens (falhas na Matrix)
- `examples/interactive.js` - Digite mensagens para exibir enquanto executa (seja o Escolhido)
- `examples/random-quotes.js` - Mostra citações aleatórias do filme Matrix (sabedoria de Zion)

Cada exemplo demonstra diferentes recursos da animação Matrix Rain. Para executar um exemplo diretamente:

```bash
node examples/interactive.js
```

## 🔌 API

### matrixRain([initialMessage])

Inicia a animação Matrix rain.

- `initialMessage` (opcional): Mensagem personalizada para exibir inicialmente (padrão: "WAKE UP NEO")
- Retorna: Promise que resolve para um objeto com métodos `display` e `stop`

### matrix.display(message)

Exibe uma mensagem no centro da tela (como uma falha na Matrix).

- `message`: String para exibir

### matrix.stop()

Para a animação e limpa o terminal (sai da Matrix).

## 🎮 Controles

- `Espaço`: Pausar/continuar a animação (congele a Matrix)
- `M`: Mostrar mensagem "MATRIX HAS YOU" (sinta o déjà vu)
- `Ctrl+C`: Sair da aplicação (tome a pílula azul)

## 🔓 Licença

MIT

---

> *"Eu sei kung fu."* - Neo