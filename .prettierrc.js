/** @type {import("prettier").Config} */

const config = {
  arrowParens: "always",
  bracketSpacing: true,
  bracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 80,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  endOfLine: "crlf",
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
