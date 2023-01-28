/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["dist"],
  collectCoverage: true,
  resolver: "jest-ts-webcompat-resolver",
  coveragePathIgnorePatterns: ["src/index.ts"],
};
