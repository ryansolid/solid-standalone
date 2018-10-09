import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    file: 'index.js',
    format: 'iife',
    globals: {
      '@babel/standalone': 'Babel'
    }
  },
  plugins: [nodeResolve(), commonjs(), terser()],
  external: ['@babel/standalone']
};