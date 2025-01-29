module.exports = {
  testEnvironment: "node",
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "ts", "json", "vue"],
  transform: {
    "^.+\\.ts$": "ts-jest", // Transform TypeScript files
    "^.+\\.vue$": "@vue/vue3-jest", // Transform Vue files
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Map @/ to src/
  },
  testMatch: ["**/tests/**/*.spec.ts"], // Match test files
  testPathIgnorePatterns: ["/node_modules/", "src/tests/e2e/"], // 👈 Ignore E2E tests
};
