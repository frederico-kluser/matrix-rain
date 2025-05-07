# Contributing to The Matrix Rain

Thank you for your interest in contributing to The Matrix Rain project! This document provides guidelines and instructions for contributing.

## 🌟 Getting Started

1. **Fork the repository** on GitHub.
2. **Clone your fork** locally:
   ```
   git clone https://github.com/YOUR-USERNAME/the-matrix-rain.git
   cd the-matrix-rain
   ```
3. **Install dependencies**:
   ```
   npm install
   ```
4. **Create a branch** for your feature or bugfix:
   ```
   git checkout -b feature/your-feature-name
   ```

## 💻 Development Workflow

1. **Code your changes** following the coding style guidelines.
2. **Run tests and linting**:
   ```
   npm run lint
   ```
3. **Test your changes** by running examples:
   ```
   npm run examples
   ```
4. **Commit your changes** with a clear, descriptive commit message.
5. **Push to your fork**:
   ```
   git push origin feature/your-feature-name
   ```
6. **Create a pull request** to the main repository.

## 🚀 Publishing to npm (For Maintainers)

If you are a maintainer with npm publishing rights, follow these steps to publish a new version:

1. **Update version number** in `package.json` following [semantic versioning](https://semver.org/):
   - MAJOR version for incompatible API changes
   - MINOR version for backwards-compatible functionality additions
   - PATCH version for backwards-compatible bug fixes

2. **Update documentation** if needed.

3. **Create and push a git tag**:
   ```
   git tag v1.0.1
   git push origin v1.0.1
   ```

4. **Publish to npm**:
   ```
   # Log in to npm if not already logged in
   npm login

   # Publish the package
   npm publish
   ```

5. **Create a GitHub release** with release notes.

## 📋 Coding Guidelines

- Follow existing code style (2 spaces for indentation).
- Write clear, maintainable, and efficient code.
- Add comments where necessary.
- Keep functions small and focused.

## 🧪 Testing

Currently, this project lacks formal tests. Contributions adding unit tests or integration tests are welcome!

## 📜 License

By contributing to The Matrix Rain, you agree that your contributions will be licensed under the project's MIT License.