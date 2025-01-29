# vue3-boilerplateapp


# 📌 Overview

* This project is a full-stack application boilerplate that includes:
* Unit Testing with Jest
* End-to-End (E2E) Testing with Playwright
* Vue 3 Support with global plugins
* Utility Functions for date formatting and URL extraction

# 🛠️ Setup & Installation

## 1️⃣ Clone the Repository

```
git clone https://github.com/yoosuf/vue3-boilerplateapp.git
cd vue3-boilerplateapp
```


## 2️⃣ Install Dependencies
```
npm install  # or yarn install
```

## 3️⃣ Run the Development Server

```
npm run dev  # or yarn dev
```


# 🧪 Running Tests

## ✅ Run Jest Unit Tests

```
npm test  # or yarn test
```

Jest is configured to run only unit tests and ignore Playwright E2E tests.

## 🎭 Run Playwright E2E Tests

```
npx playwright install  # (only needed once)
npm run test:e2e  # or yarn test:e2e
```

Playwright tests are stored in src/tests/e2e/ and should be run separately from Jest.



# 🚀 Features

* Vue 3 with global plugin support
* Jest for unit testing
* Playwright for end-to-end testing
* Reusable utility functions


# 📝 Contributing

* Fork the repository
* Create a new branch (git checkout -b feature-branch)
* Commit your changes (git commit -m 'Add new feature')
* Push to the branch (git push origin feature-branch)
* Create a Pull Request 🚀