const fs = require('fs');
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = JSON.parse(fs.readFileSync('./tsconfig.json', 'utf8'));
require('dotenv').config({ path: '.env.test' });

module.exports = {
  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/src'],

  // The test environment that will be used for testing
  testEnvironment: 'jest-environment-jsdom',

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: {
          ...compilerOptions,
          verbatimModuleSyntax: false,
          module: 'commonjs',
          moduleResolution: 'node',
        },
      },
    ],
  },

  // The glob patterns Jest uses to detect test files
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?|ts?)$',

  // An array of file extensions your modules use
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // setupFiles after env
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // A map from regular expressions to module names
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths , { prefix: '<rootDir>/' } ),
};