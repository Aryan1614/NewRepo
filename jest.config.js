module.exports = {
  collectCoverage: true, // Enable coverage collection
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}", // Specify files to collect coverage from
    "!src/index.js", // Exclude entry point
    "!src/reportWebVitals.js", // Exclude generated files
    "!src/setupTests.js", // Exclude setup files
  ],
  coverageDirectory: "coverage", // Output directory for coverage report
  coverageReporters: ["html", "text", "lcov"], // Report formats
  testEnvironment: "jsdom", // Required for Testing Library
};
