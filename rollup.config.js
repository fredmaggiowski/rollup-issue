import {DEFAULT_EXTENSIONS} from '@babel/core'

import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import builtins from 'rollup-plugin-node-builtins'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      external: ['path']
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: false
    }),
    url(),
    svgr(),
    babel({
      extensions: [
        ...DEFAULT_EXTENSIONS,
        'ts'
      ],
      exclude: 'node_modules/**',
      plugins: [ '@babel/external-helpers' ]
    }),
    builtins(),
    resolve(),
    commonjs(),
    typescript({
      verbosity: 2,
      objectHashIgnoreUnknownHack: true,
      useTsconfigDeclarationDir: true,
      outDir: 'dist'
    })
  ]
}
