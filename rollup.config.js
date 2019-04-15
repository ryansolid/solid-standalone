import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default [{
  input: 'src/babel.js',
  output: {
    file: 'babel.min.js',
    format: 'iife',
    globals: {
      '@babel/standalone': 'window.Babel'
    }
  },
  plugins: [nodeResolve(), commonjs(), terser()],
  external: ['@babel/standalone']
}, {
  input: 'src/html.js',
  output: {
    file: 'html.min.js',
    format: 'iife'
  },
  plugins: [nodeResolve(), commonjs(), terser()]
}, {
  input: 'src/h.js',
  output: {
    file: 'h.min.js',
    format: 'iife',
  },
  plugins: [nodeResolve(), commonjs(), terser()]
}];