# CLAUDE.md

This file provides guidance to Claude Code when working with this repository, following the VIBE (Voice/Intention-Based Engineering) architecture for new projects.

## Project Vision

Matrix Rain is a Node.js terminal-based animation that recreates the iconic "digital rain" effect from The Matrix films. The project aims to produce a visually engaging representation of falling characters (primarily Japanese katakana and numbers) that appears like the classic Matrix code rain effect, directly in your terminal.

## Implementation Approach

- **Frontend**: Pure JavaScript for terminal-based animation, using Node.js process.stdout for rendering
- **Backend**: N/A - This is a standalone Node.js application with no backend services
- **Database**: N/A - No database required for this animation effect
- **Infrastructure**: Simple Node.js script that can be run in any terminal environment

## VIBE Architecture Principles

- Define high-level intentions first, let implementation details follow
- Maintain clear separation between intent interpretation and execution
- Use natural language to specify behavior, code to implement it
- Prioritize user experience over implementation complexity
- Document the mapping between natural language intents and code implementation

## Code Conventions

### Style Guidelines
- Use 2-space indentation for all files
- Follow consistent naming conventions:
  - camelCase for variables and functions
  - PascalCase for classes and interfaces
  - UPPER_SNAKE_CASE for constants
- Limit line length to 100 characters
- Use semicolons consistently
- Prefer explicit type annotations

### Best Practices
- Write pure functions whenever possible
- Avoid deeply nested code (maximum 3 levels)
- Implement error handling consistently
- Use early returns to reduce nesting
- Keep functions small and focused (< 30 lines)
- Use meaningful variable and function names

## Project Structure

```
/
├── index.js          # Main application code with Matrix rain implementation
├── refactor.md       # Documentation for refactoring the terminal app to web
├── README.md         # Project documentation
├── package.json      # Project dependencies and scripts
└── package-lock.json # Locked dependencies
```

## Development Flow

1. Begin with clear intention specification
2. Document user stories in natural language
3. Create test cases before implementation
4. Implement code that fulfills the intention
5. Verify that implementation matches intent
6. Document the mapping from intent to code

## Common Development Commands

```bash
# Install dependencies
npm install

# Run the matrix rain animation
node index.js

# Lint code
npm run lint
```

## Patterns and Examples

### Matrix Animation Pattern

```javascript
// Core Matrix animation pattern
class Matrix {
  constructor(row, column) {
    this.column = column;
    this.row = row;
    this.life = rows;
    this.letter = ' ';
    this.color = COLOR.TRANSPARENT;

    // Initialize characters for first row
    if (!this.row) {
      this.changeLetter(2);
    }
  }

  changeLetter(probability = 100) {
    if (getProbability(probability)) {
      this.letter = getRandomCharacter();
      this.color = COLOR.GREEN;
    }
  }

  passTime() {
    // Logic for character behavior over time
    // ...
  }

  delete() {
    this.life = rows;
    this.letter = ' ';
  }
}
```

### Animation Loop Pattern

```javascript
// Example animation loop pattern
function matrixRain(execute = true) {
  if (executeCheck(execute)) {
    // Initialize if needed
    if (!matrixArrDraw.length) {
      for (let row = 0; row < rows; row += 1) {
        matrixArrDraw.push([]);
        for (let colum = 0; colum < columns; colum += 1) {
          matrixArrDraw[row].push(new Matrix(row, colum));
        }
      }
      generateOutput();
    }

    // Set up animation interval
    interval = setInterval(() => {
      changeCharacter();
    }, 150);
  }
}
```

### Terminal Output Pattern

```javascript
// Pattern for terminal output
const generateOutput = () => {
  console.clear();
  let draw = '';

  matrixArrDraw.forEach(line => {
    line.forEach(character => {
      draw += character.letter;
    });
    draw += '\n';
  });

  console.log(draw);
};
```

## VIBE-Specific Guidance

When implementing features in this project:

1. Begin with the high-level intention or user story
2. Break down complex features into smaller, focused components
3. Define clear interfaces before implementation
4. Document the reasoning behind implementation choices
5. Use typed interfaces to ensure type safety
6. Follow established patterns in the codebase
7. Prioritize readability and maintainability over clever code

## Testing Strategy

- **Unit Tests**: Test individual functions and components in isolation
- **Integration Tests**: Test interactions between multiple components
- **E2E Tests**: Test complete user flows
- **Test Coverage**: Aim for at least 80% code coverage

## Instructions for Research and External Resources

Claude, when you need to access external resources or research information:

1. ALWAYS FIRST add the URL temporarily to this CLAUDE.md file under "Authorized URLs"
2. Use WebFetchTool ONLY after adding the URL
3. Remove the URL from the list after completing the research
4. Never access URLs not explicitly authorized through this process

### Authorized URLs
- https://api.duckduckgo.com

## Contact Information

For questions about this project, contact Frederico Guilherme Kluser de Oliveira.

## Refactoring Plans

As documented in refactor.md, there are plans to potentially refactor this terminal-based animation to a web-based implementation using Canvas or WebGL for improved performance and visual effects.

---
Last updated: May 07, 2025