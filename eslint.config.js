// import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
// import typescriptParser from '@typescript-eslint/parser';
// import { defineConfig } from 'eslint-define-config';
// import importPlugin from 'eslint-plugin-import';
// import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
// import prettierPlugin from 'eslint-plugin-prettier';
// import reactPlugin from 'eslint-plugin-react';
// import reactHooksPlugin from 'eslint-plugin-react-hooks';
// import unicornPlugin from 'eslint-plugin-unicorn';

// export default defineConfig({
//   languageOptions: {
//     parser: typescriptParser,
//     parserOptions: {
//       ecmaVersion: 'latest',
//       sourceType: 'module',
//       ecmaFeatures: {
//         jsx: true,
//       },
//       project: ['./tsconfig.app.json'], // Better than root tsconfig
//     },
//     globals: {
//       browser: true,
//       es2021: true,
//       node: true,
//     },
//   },
//   plugins: {
//     react: reactPlugin,
//     'react-hooks': reactHooksPlugin,
//     'jsx-a11y': jsxA11yPlugin,
//     import: importPlugin,
//     prettier: prettierPlugin,
//     unicorn: unicornPlugin,
//     '@typescript-eslint': typescriptEslintPlugin,
//   },
//   rules: {
//     'no-console': 'warn',
//     'no-debugger': 'warn',
//     'no-unused-vars': 'off',
//     '@typescript-eslint/no-unused-vars': ['warn'],
//     'no-undef': 'off',
//     'import/order': [
//       'error',
//       {
//         groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
//         alphabetize: {
//           order: 'asc',
//           caseInsensitive: true,
//         },
//         'newlines-between': 'always',
//       },
//     ],
//     'react/react-in-jsx-scope': 'off',
//     'react/prop-types': 'off',
//     'react/jsx-key': 'error',
//     'jsx-a11y/alt-text': 'warn',
//     'jsx-a11y/anchor-is-valid': 'warn',
//     'unicorn/filename-case': [
//       'error',
//       {
//         cases: {
//           camelCase: true,
//           pascalCase: true,
//         },
//       },
//     ],
//     'unicorn/prevent-abbreviations': 'off',
//     'unicorn/consistent-function-scoping': 'warn',
//     'prettier/prettier': 'error',
//   },
//   settings: {
//     react: {
//       version: 'detect',
//     },
//     'import/resolver': {
//       typescript: {
//         project: './tsconfig.app.json',
//       },
//     },
//   },
//   ignores: [
//     'node_modules/**',
//     'node_modules/',
//     'dist/**',
//     'build/**',
//     'coverage/',
//     '.vite/',
//     '.vite-cache/',
//     '.next/',
//     'out/',
//     'public/',
//     '*.min.js',
//     '*.config.js',
//     '*.config.cjs',
//     '*.config.mjs',
//     '.env',
//     '.env.*',
//     '.vscode/',
//   ],
// });

import tsPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import unicornPlugin from 'eslint-plugin-unicorn';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/.vite*/**',
      '**/.next/**',
      '**/out/**',
      '**/public/**',
      '**/*.min.js',
      '**/*.config.js',
      '**/*.config.cjs',
      '**/*.config.mjs',
      '**/.env',
      '**/.env.*',
      '**/.vscode/**',
    ],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: ['./tsconfig.app.json'], // Ensure this exists and is correct
      },
      globals: {
        browser: true,
        node: true,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      'jsx-a11y': jsxA11yPlugin,
      prettier: prettierPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      unicorn: unicornPlugin,
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          alphabetize: { order: 'asc', caseInsensitive: true },
          'newlines-between': 'always',
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-key': 'error',
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            pascalCase: true,
          },
        },
      ],
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/consistent-function-scoping': 'warn',
      'prettier/prettier': 'error',
      'unicorn/filename-case': 'off',
    },
  },
];
