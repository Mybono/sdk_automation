# SDK Automation

![npm version](https://img.shields.io/npm/v/sdk_automation?color=brightgreen)
![License](https://img.shields.io/npm/l/sdk_automation?color=blue)
![Build](https://img.shields.io/github/actions/workflow/status/Mybono/sdk_automation/build.yml?branch=main&label=CI&color=blue)
![npm downloads](https://img.shields.io/npm/dt/sdk_automation?color=orange)
![Top language](https://img.shields.io/github/languages/top/Mybono/sdk_automation?color=blue)
![Coverage](https://coveralls.io/repos/github/Mybono/sdk_automation/badge.svg?branch=main)


**SDK Automation** is a public npm package created for the [QA Portfolio](https://github.com/mybono/qa-portfolio) demo project.  
It provides utilities, services, and helpers for automated testing, logging, data handling, and test data generation.

---

## 🚀 Installation

Install via npm:

```bash
npm install sdk_automation
```

## 💡 Quick Start

```bash

import { logger, UserService } from 'sdk_automation';

// Logging example
logger.log('Hello from SDK Automation!');

// Working with UserService
const userService = new UserService();
const users = await userService.getAllUsers();
console.log(users);
```

## 🗂 Package Structure

- **utils/** — general utilities like logger, test data generator, and assets tracker
- **services/** — services for database interaction and business logic
- **constants/** — selectors, URLs, and other constants
- **interfaces/** — TypeScript interfaces and types
- **config/** — environment configuration

## ✨ Features

- **Logger** — simple logger with color output
- **UserService** — service for user-related operations
- **MongoService** — MongoDB connection and data operations
- **TestDataGenerator** — generate random test data
- **AssetsTracker** — track changes in project resources

## 🧪 Example Usage with Playwright

```bash
import { logger, testDataGenerator } from 'sdk_automation';
import { test } from '@playwright/test';

test('example test', async ({ page }) => {
  logger.log('Starting test');

  const testUser = testDataGenerator.generateUser();
  await page.fill('#username', testUser.username);
  await page.fill('#password', testUser.password);

  logger.log('Test completed successfully');
});
```

## ⚙️ CI/CD Workflows

This project has **two GitHub Actions workflows** to ensure code quality and automate package publishing:

---

### 1️⃣ Pull Request Workflow (`ci-pr.yml`)

- **Trigger:** `on: pull_request` targeting `main` branch  
- **Purpose:** run full CI for every PR before merge  
- **Jobs:**
  - Checkout repository
  - Setup Node.js
  - Install dependencies (`npm ci`)
  - TypeScript type check (`npx tsc --noEmit`)
  - Lint code (`npm run lint`)
  - Run unit tests (`npm test`)
  - Audit dependencies (`npm audit --audit-level=moderate`)

> ⚠️ This workflow **does not publish the package**, it only ensures PRs are safe and code quality is maintained.

---

### 2️⃣ Publish Workflow (`publish.yml`)

- **Trigger:** `on: push` to `main` branch  
- **Purpose:** build and publish the SDK package to npm  
- **Jobs:**
  - Checkout repository
  - Setup Node.js with npm registry
  - Cache node modules
  - Install dependencies (`npm ci`)
  - TypeScript type check (`npx tsc --noEmit`)
  - Lint code (`npm run lint`)
  - Run tests (`npm test`)
  - Audit dependencies (`npm audit`)
  - Build package (`npm run build`)
  - Publish to npm (`npm publish --access public`) using `NODE_AUTH_TOKEN` from GitHub Secrets

> ⚠️ This workflow ensures that **only code merged to main** and passing all checks gets published.


### 📖 Documentation

Full documentation for each utility and service can be found in the `dist` folder or by exploring the TypeScript types.

### 💬 Contributing

This package is maintained for the **QA Portfolio** demo project.  
Found a bug or have a feature request? Open an **issue** or submit a **pull request**.
