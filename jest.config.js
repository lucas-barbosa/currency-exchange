/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  preset: 'ts-jest',
  roots: [
    "<rootDir>/src"
  ],
  setupFiles: ["dotenv/config"],
  testEnvironment: 'node',
};
