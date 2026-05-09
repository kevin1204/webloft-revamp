# Clean Code Guidelines for Webloft Studio

## Overview
This document outlines the clean code principles and guidelines that should be followed when developing and maintaining the Webloft Studio project.

## Core Principles

### 1. Single Responsibility Principle (SRP)
Each component, function, and file should have one reason to change.

**Good:**
```tsx
// components/Button.tsx
export default function Button({ children, variant, onClick }: ButtonProps) {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

**Bad:**
```tsx
// components/Button.tsx - Does too many things
export default function Button({ children, variant, onClick, validateForm, submitData }: ButtonProps) {
  // Button logic + form validation + data submission
}
```

### 2. Don't Repeat Yourself (DRY)
Avoid code duplication by extracting common functionality.

**Good:**
```tsx
// utils/formatters.ts
export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};
```

**Bad:**
```tsx
// Multiple files with duplicate currency formatting logic
const formatCurrency = (amount) => `$${amount.toFixed(2)}`;
```

### 3. You Aren't Gonna Need It (YAGNI)
Don't add functionality until it's actually needed.

**Good:**
```tsx
// Only implement what's currently needed
export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // Simple, focused implementation
}
```

**Bad:**
```tsx
// Over-engineered with unnecessary features
export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState(''); // Not needed yet
  const [company, setCompany] = useState(''); // Not needed yet
  const [preferences, setPreferences] = useState({}); // Not needed yet
  
  // Complex validation, analytics, etc. that aren't required
}
```

## File Organization

### 1. Directory Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── (routes)/          # Route groups
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # Basic UI components
│   ├── forms/            # Form components
│   └── layout/           # Layout components
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── types/                # TypeScript type definitions
└── utils/                # Helper functions
```

### 2. Naming Conventions

**Files:**
- Components: `PascalCase.tsx` (e.g., `ContactForm.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatCurrency.ts`)
- Hooks: `useCamelCase.ts` (e.g., `useLocalStorage.ts`)
- Types: `camelCase.ts` (e.g., `userTypes.ts`)

**Variables:**
- Constants: `UPPER_SNAKE_CASE`
- Variables: `camelCase`
- Functions: `camelCase`
- Components: `PascalCase`

## Component Guidelines

### 1. Component Structure
```tsx
// 1. Imports
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

// 2. Types
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

// 3. Component
export default function Button({ children, variant = 'primary', onClick }: ButtonProps) {
  // 4. State
  const [isLoading, setIsLoading] = useState(false);
  
  // 5. Event handlers
  const handleClick = () => {
    setIsLoading(true);
    onClick?.();
  };
  
  // 6. Render
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
}
```

### 2. Component Size
- Keep components under 200 lines
- Extract complex logic into custom hooks
- Break down large components into smaller ones

### 3. Props Interface
```tsx
// Good: Clear, specific props
interface UserCardProps {
  user: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
  };
  onEdit?: (userId: string) => void;
  onDelete?: (userId: string) => void;
}

// Bad: Too generic or unclear
interface UserCardProps {
  data: any;
  actions: any;
}
```

## Code Quality

### 1. TypeScript Usage
```tsx
// Good: Proper typing
interface FormData {
  name: string;
  email: string;
  message: string;
}

const handleSubmit = (data: FormData): Promise<void> => {
  // Implementation
};

// Bad: Using any
const handleSubmit = (data: any): any => {
  // Implementation
};
```

### 2. Error Handling
```tsx
// Good: Proper error handling
const fetchUser = async (id: string): Promise<User | null> => {
  try {
    const response = await fetch(`/api/users/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
};
```

### 3. Performance Considerations
```tsx
// Good: Memoization when needed
const ExpensiveComponent = React.memo(({ data }: { data: ComplexData }) => {
  const processedData = useMemo(() => {
    return data.map(item => processItem(item));
  }, [data]);
  
  return <div>{processedData}</div>;
});

// Good: Proper dependency arrays
useEffect(() => {
  fetchData();
}, [userId]); // Only re-run when userId changes
```

## CSS and Styling

### 1. Tailwind CSS Usage
```tsx
// Good: Semantic class names
<button className="btn-primary hover:btn-primary-hover transition-colors">
  Submit
</button>

// Bad: Inline styles or overly complex classes
<button style={{ backgroundColor: '#10b981', color: 'white' }}>
  Submit
</button>
```

### 2. CSS Organization
```css
/* globals.css - Global styles only */
@import "tailwindcss";

/* Custom utility classes */
.btn-primary {
  @apply bg-green-500 text-white px-4 py-2 rounded-lg;
}

.btn-primary:hover {
  @apply bg-green-600;
}
```

## Testing Guidelines

### 1. Component Testing
```tsx
// components/__tests__/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  
  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## Documentation

### 1. Component Documentation
```tsx
/**
 * A reusable button component with multiple variants
 * 
 * @param children - The button content
 * @param variant - The button style variant
 * @param onClick - Click handler function
 * @param disabled - Whether the button is disabled
 */
export default function Button({ 
  children, 
  variant = 'primary', 
  onClick,
  disabled = false 
}: ButtonProps) {
  // Implementation
}
```

### 2. README Updates
- Keep README.md updated with setup instructions
- Document any new dependencies or configuration changes
- Include examples of common usage patterns

## Code Review Checklist

### Before Submitting PR:
- [ ] Code follows naming conventions
- [ ] Components are properly typed
- [ ] No unused imports or variables
- [ ] Error handling is implemented
- [ ] Performance considerations are addressed
- [ ] Tests are written and passing
- [ ] Documentation is updated
- [ ] No console.log statements in production code

### During Code Review:
- [ ] Code is readable and self-documenting
- [ ] Logic is clear and straightforward
- [ ] No code duplication
- [ ] Proper separation of concerns
- [ ] Security considerations are addressed
- [ ] Accessibility requirements are met

## Tools and Automation

### 1. Linting
- ESLint for JavaScript/TypeScript
- Prettier for code formatting
- Husky for pre-commit hooks

### 2. Type Checking
- TypeScript strict mode enabled
- Regular type checking in CI/CD

### 3. Testing
- Jest for unit testing
- React Testing Library for component testing
- Coverage reports in CI/CD

## Conclusion

Following these clean code guidelines will result in:
- More maintainable code
- Better developer experience
- Reduced bugs and technical debt
- Easier onboarding for new developers
- Improved performance and scalability

Remember: Clean code is not just about following rules, but about writing code that is easy to understand, modify, and extend.
