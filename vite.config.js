import glsl from 'vite-plugin-glsl';
import { defineConfig } from 'vite'
import path from 'path'
import { glslify } from 'vite-plugin-glslify';
import babel from 'vite-plugin-babel';
// import html from 'vite-plugin-html';
const dirname = path.resolve()

export default defineConfig({
    root: 'sources',
    publicDir: '../public',
    build:
    {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true
    },
    plugins: [
        glsl(),
        glslify(),
        babel()

    ]
})