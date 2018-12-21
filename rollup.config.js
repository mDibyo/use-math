import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import css from 'rollup-plugin-css-only';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: {
    file: pkg.main,
    format: 'cjs',
  },
  external: [
    'react',
    'react-dom',
  ],
  plugins: [
    resolve(),
    commonjs(),
    css(),
  ],
}
