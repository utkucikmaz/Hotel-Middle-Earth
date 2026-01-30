# Contributing to Hotel Middle Earth

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards others

## Getting Started

1. **Fork the repository**
2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Hotel-Middle-Earth.git
   cd Hotel-Middle-Earth
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Running the Project

```bash
# Start development server
npm run dev

# Run tests
npm test

# Run linter
npm run lint

# Format code
npm run format

# Build for production
npm run build
```

### Project Structure

```
src/
├── core/         # Core game logic
├── entities/     # Game entities (Visitor, Hotel)
├── services/     # Services (Audio, Firebase, Storage)
├── ui/           # UI components
├── utils/        # Utility functions
└── types/        # TypeScript type definitions
```

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` type unless absolutely necessary
- Use strict mode

### Code Style

- Follow the existing code style
- Use ESLint and Prettier configurations
- Run `npm run format` before committing
- Keep functions small and focused
- Use meaningful variable names

### Naming Conventions

- **Classes**: PascalCase (e.g., `GameStateManager`)
- **Functions**: camelCase (e.g., `handleVisitorClick`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `GAME_CONFIG`)
- **Files**: PascalCase for classes, camelCase for utilities

### Comments

- Write self-documenting code
- Add comments for complex logic
- Use JSDoc for public APIs
- Keep comments up-to-date

## Making Changes

### Before You Start

1. Check existing issues and PRs
2. Create an issue to discuss major changes
3. Ensure your idea aligns with project goals

### Writing Code

1. **Write tests** for new features
2. **Update documentation** as needed
3. **Follow existing patterns** in the codebase
4. **Keep commits atomic** and focused

### Testing

- Write unit tests for utilities and services
- Test game mechanics thoroughly
- Ensure tests pass before submitting PR
- Aim for >80% code coverage

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm test -- --watch
```

## Submitting Changes

### Commit Messages

Follow conventional commits format:

```
type(scope): subject

body (optional)

footer (optional)
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples**:
```
feat(game): add pause menu functionality
fix(visitor): correct spawn position calculation
docs(readme): update installation instructions
```

### Pull Request Process

1. **Update your branch**:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Run all checks**:
   ```bash
   npm run lint
   npm test
   npm run build
   ```

3. **Push your changes**:
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create Pull Request**:
   - Use a clear, descriptive title
   - Reference related issues
   - Describe your changes
   - Include screenshots if applicable
   - List any breaking changes

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] New tests added
- [ ] Manual testing completed

## Screenshots (if applicable)

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
```

## Areas for Contribution

### Good First Issues

- Fix typos in documentation
- Add more unit tests
- Improve error messages
- Enhance accessibility features

### Feature Ideas

- Settings menu with volume controls
- Additional game modes
- New special characters
- Achievement system
- Sound effects toggle
- Difficulty levels
- Tutorial improvements

### Bug Fixes

- Check open issues for bugs
- Test edge cases
- Improve error handling

## Code Review

### For Contributors

- Be open to feedback
- Respond to review comments
- Make requested changes promptly
- Ask questions if unclear

### For Reviewers

- Be constructive and kind
- Explain reasoning for suggestions
- Approve when ready
- Test changes locally if needed

## Documentation

When adding features:
- Update README.md if needed
- Add JSDoc comments
- Update SETUP.md for configuration changes
- Create examples if applicable

## Performance

- Profile before optimizing
- Avoid premature optimization
- Use browser dev tools
- Test on various devices
- Keep bundle size small

## Accessibility

- Add ARIA labels
- Support keyboard navigation
- Test with screen readers
- Ensure color contrast
- Support reduced motion

## Questions?

- Open an issue for questions
- Join discussions
- Check existing documentation
- Review closed issues/PRs

## Recognition

Contributors will be:
- Listed in README
- Mentioned in release notes
- Credited in commits

Thank you for contributing! 🎮✨
