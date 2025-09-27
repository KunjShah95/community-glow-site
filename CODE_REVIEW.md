# 📝 Code Review Guidelines

This document describes the process and standards for reviewing code in the **community-glow-site** project.

---

## 📐 Review Goals

- Ensure code quality, maintainability, and readability
- Detect bugs, security issues, and performance problems
- Encourage best practices and consistent style
- Promote open source community values: collaboration, transparency, inclusion

---

## 🤖 Code Review Checklist

1. **Functionality**
    - Does the code do what it is supposed to?
    - Are edge cases handled?
    - Are there tests for new features/fixes?

2. **Code Quality**
    - Is the code clean and easy to read?
    - Are variable and function names descriptive?
    - Is code duplication minimized?

3. **Style & Consistency**
    - Does the code follow the project's style guidelines (e.g., Prettier, ESLint)?
    - Is formatting consistent?

4. **Performance**
    - Is the code efficient?
    - Are there unnecessary computations or API calls?

5. **Security**
    - Are user inputs validated/sanitized?
    - Is sensitive data protected?

6. **Documentation**
    - Are functions/components/pages documented?
    - Are public APIs, props, and interfaces described?

7. **Accessibility**
    - Does the UI adhere to accessibility standards (WCAG)?
    - Are semantic HTML tags used?
    - Are ARIA attributes applied where needed?

8. **Tests**
    - Are there unit/integration/E2E tests for new code?
    - Do all tests pass?

---

## 🛠️ Review Process

1. **Open a Pull Request**
    - Fill out the PR description: summary, context, related issues, testing notes

2. **Assign Reviewers**
    - Tag 1–2 contributors for review

3. **Review**
    - Use GitHub review tools to comment, suggest changes, or approve

4. **Address Feedback**
    - Make required changes and resolve comments

5. **Merge**
    - Once approved and all checks pass, merge the PR

---

## 💡 Tips for Reviewers

- Be constructive and kind: suggest improvements, explain reasoning
- Ask questions if something is unclear
- Point out good practices and improvements
- Encourage documentation and tests

---

## 📚 References

- [React Best Practices](https://react.dev/learn)
- [JavaScript Style Guide](https://github.com/airbnb/javascript)
- [WCAG Accessibility Standards](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Testing Library Docs](https://testing-library.com/docs/)

---

Thank you for helping maintain a healthy, inclusive, and high-quality codebase!