# SDK Automation

![npm version](https://img.shields.io/npm/v/sdk_automation?color=brightgreen)
![License](https://img.shields.io/npm/l/sdk_automation?color=blue)
![Build](https://img.shields.io/github/actions/workflow/status/Mybono/sdk_automation/publish.yml?branch=main&label=CI&color=blue)
![npm downloads](https://img.shields.io/npm/dt/sdk_automation?color=orange)
![GitHub Repo stars](https://img.shields.io/github/stars/mybono/sdk_automation?color=yellow)

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

### 1️⃣ Pull Request Workflow

- **Trigger:** Runs on `pull_request` events targeting the `main` branch (`opened`, `synchronize`, `reopened`).  
- **Purpose:** Executes a full CI workflow for every PR before merge.  

#### Jobs:

- 🚀 [pr-checkmate](https://dev.to/deftoexplore/pr-checkmate-stop-debating-style-and-start-coding-ij) 
**A set of automated checks for Pull Requests**
  - ESLint checks  
  - Dependency change detection  
  - Prettier auto-formatting  
  - Spellcheck (`cspell`)  

- ✅ pr-validation
  - Checks PR size (number of files and lines changed)  
  - Generates PR metrics summary for quick review  

- 📝 update-changelog
  - Automatically updates `CHANGELOG.md` based on conventional commits  
  - Determines semantic version bump (patch/minor/major) according to commit types  

- 🤖 auto-merge
  - Automatically merges the PR once all checks pass and changelog is updated

![pr-pipelne](./src/assets/pr_pipeline.png)

> ⚠️ This workflow **does not publish the package**, it only ensures PRs are safe and code quality is maintained.

---

### 2️⃣ Publish Workflow
> Runs automatically if the Pull Request Workflow was successful

- **Trigger:** `on: push` to `main` branch
- **Purpose:** build and publish the SDK package to npm
- **Jobs:**
  - Checkout repository
  - Setup Node.js with npm registry
  - Cache node modules
  - Install dependencies 
  - Build package 
  - Publish to npm 

> ⚠️ This workflow ensures that **only code merged to main** and passing all checks gets published.

### 📖 Documentation

Full documentation for each utility and service can be found in the `dist` folder or by exploring the TypeScript types.

### 💬 Contributing

This package is maintained for the **QA Portfolio** demo project.  
Found a bug or have a feature request? Open an **issue** or submit a **pull request**.

> 💫 If you like this project, please consider giving it a star!  
> It helps others find it and keeps me motivated
