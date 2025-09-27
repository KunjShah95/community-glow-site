# 🧪 Test Cases Guide

This document describes the approach to testing the **community-glow-site** project, including available test cases, testing strategy, and instructions to run and extend the tests.

---

## 📋 Testing Strategy

- **Unit Tests:** Isolate and test individual components and logic.
- **Integration Tests:** Ensure that components interact correctly (e.g., pages, API calls).
- **UI/Visual Tests:** Confirm that UI renders as expected across devices.
- **End-to-End (E2E) Tests:** Simulate user flows through the application.

---

## 🛠️ Running Tests

> This project uses [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit and integration tests.

1. **Install dependencies** (if not already done):
    ```sh
    npm i
    ```

2. **Run all tests:**
    ```sh
    npm test
    ```

3. **Run tests with coverage report:**
    ```sh
    npm test -- --coverage
    ```

4. **Watch mode (recommended during development):**
    ```sh
    npm test -- --watch
    ```

---

## 📦 Test Case Examples

### Component Test Example

```tsx
// src/components/__tests__/About.test.tsx
import { render, screen } from '@testing-library/react';
import { About } from '../About';

test('renders About section', () => {
  render(<About />);
  expect(screen.getByText(/Open Source First/i)).toBeInTheDocument();
});
```

### Page Test Example

```tsx
// src/pages/__tests__/Jobs.test.tsx
import { render, screen } from '@testing-library/react';
import Jobs from '../Jobs';

test('shows job board', () => {
  render(<Jobs />);
  expect(screen.getByText(/Job Board/i)).toBeInTheDocument();
});
```

---

## 🏗️ Adding New Tests

1. Create a new file in the related component or page's `__tests__` folder.
2. Use descriptive test names.
3. Cover edge cases, error states, and typical user interactions.

---

## ❓ FAQ

- **Where are the tests?**
  - Look for `__tests__` folders next to components/pages.

- **How do I test UI interactions?**
  - Use [user-event](https://testing-library.com/docs/user-event/intro/) for simulating clicks, typing, etc.

- **Can I test API calls?**
  - Yes, use [msw](https://mswjs.io/) (Mock Service Worker) for mocking APIs in tests.

---

## 🙌 Contributing Tests

Your contributions to testing are welcome!  
Open a PR and describe the scenarios your tests cover.
