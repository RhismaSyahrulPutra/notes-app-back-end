import { defineConfig } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import daStyle from 'eslint-config-dicodingacademy'
import prettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

export default defineConfig([
  daStyle,
  { files: ['**/*.{js,mjs,cjs}'] },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { files: ['**/*.{js,mjs,cjs}'], languageOptions: { globals: globals.node } },
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { prettierPlugin },
    extends: [prettier],
  },
  { files: ['**/*.{js,mjs,cjs}'], rules: { 'prettier/prettier': 'error' } },
])
