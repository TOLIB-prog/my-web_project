// eslint.config.js
import globals from "globals";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.ts"],
    ignores: ["**/*.d.ts"],
    languageOptions: {
      parser: tsParser,
      globals: globals.browser,
    },
    files: ["**/*.html"],
    processor: "html/html",
    rules: {
      "no-unused-vars": "off", // Отключаем для HTML
    },
    plugins: {
      "@typescript-eslint": ts,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];
