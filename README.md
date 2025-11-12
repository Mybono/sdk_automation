# SDK Automation

![npm version](https://img.shields.io/npm/v/sdk_automation?color=brightgreen)
![License](https://img.shields.io/npm/l/sdk_automation?color=blue)
![Build](https://img.shields.io/github/actions/workflow/status/Mybono/sdk_automation/build.yml?branch=main&label=CI&color=blue)

**SDK Automation** is a public npm package created for the [QA Portfolio](https://github.com/your-username/qa-portfolio) demo project.  
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

### 📖 Documentation

Full documentation for each utility and service can be found in the `dist` folder or by exploring the TypeScript types.

### 💬 Contributing

This package is maintained for the **QA Portfolio** demo project.  
Found a bug or have a feature request? Open an **issue** or submit a **pull request**.
