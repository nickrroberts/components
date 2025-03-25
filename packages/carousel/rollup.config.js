import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import postcssUrl from 'postcss-url';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    postcss({ extract: 'index.css',
      plugins: [
        postcssUrl({
          url: 'copy',        
          assetsPath: '../dist/icons',  
          useHash: true 
        })
      ]
     })
  ]
};