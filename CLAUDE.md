# My Portfolio Project Guide

## Build & Development Commands
- `npm start` - Run dev server with hot reload
- `npm run build` - Build for production
- `npm test` - Run all tests
- `npm test -- --watch` - Run tests in watch mode
- `npm test -- -t "test name"` - Run specific test
- `npm run lint` - Run ESLint (follows react-app config)

## Code Style Guidelines

### React Patterns
- Use functional components with hooks (no class components)
- Keep components focused on a single responsibility
- Use framer-motion for animations with useAnimation hook

### Imports (in this order)
1. React/framework imports
2. Third-party libraries
3. Components/local imports
4. CSS/style imports

### Naming Conventions
- Component files: PascalCase.js (Portfolio.js)
- Functions: camelCase
- Constants: UPPER_SNAKE_CASE (global) or camelCase (component scope)
- Props: descriptive, camelCase

### State Management
- Use useState for component-level state
- Use useEffect with proper dependency arrays
- Avoid prop drilling with context when needed

### Styling
- Use Tailwind CSS with mobile-first approach (responsive classes)
- Follow design system color tokens for consistency
- Dark theme by default with gradient accents

### Error Handling
- Use try/catch for async operations
- Provide fallbacks for conditional rendering
- Use optional chaining for nested objects