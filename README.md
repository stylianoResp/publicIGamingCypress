# publicIGaming — Test Automation Framework

## Overview  
This project is a web UI test automation framework (using **Cypress + TypeScript**) targeting “iGaming” (or similar) applications. The goal is to build a well-structured, maintainable, and reusable test suite.  

Key design principles include:
- Encapsulation of repeated behaviors as **custom / reusable commands**
- Environment-based configuration and fixtures
- Clear separation of support, page objects, fixtures, and test specs
- Scalability: making it easier to add new tests without duplicating boilerplate

---

## Project Structure

| Path | Purpose / role |
|---|---|
| `cypress.config.ts` | Main configuration for Cypress (base URLs, timeouts, etc.) |
| `env.config.ts` | Environment-specific configuration (e.g. dev / staging / prod) |
| `fixtures/environments` | JSON or similar files with test data / environment-specific data |
| `support` | Custom support code (commands, utilities, global hooks) |
| `e2e` | The actual test specs (end-to-end tests) |
| `package.json` | Dependencies, scripts, etc. |

---

## What We’re Doing

### 1. Reusability & DRY (Don’t Repeat Yourself)  
Repeated steps like login, navigation, and API calls are abstracted into **custom commands** or helper functions.

### 2. Configuration per environment  
Tests can easily switch between dev, staging, and production without code changes.

### 3. Maintainability  
Test specs stay focused on business logic, not setup boilerplate.  

### 4. Type safety  
Using TypeScript ensures autocomplete, safe refactoring, and clean structure.

### 5. Scalability  
Easy to add new commands, page objects, and tests as the application grows.

---

## Coding Conventions

| Item | Convention | Example |
|------|------------|---------|
| Variables & functions | `camelCase` | `const orderId = 123;` <br> `function getUserInfo() {}` |
| Classes & interfaces | `PascalCase` | `interface UserAccount { ... }` <br> `class OrderService { ... }` |
| Constants | `UPPER_CASE` | `const MAX_RETRIES = 3;` |
| File names | `kebab-case` | `login-service.ts` <br> `user-profile.ts` |

These conventions keep the codebase consistent and easy to read.

---
