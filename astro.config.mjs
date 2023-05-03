import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import compress from 'astro-compress';
import yaml from '@rollup/plugin-yaml';
import postcssPresetEnv from 'postcss-preset-env';

import { createRequire } from 'module';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const CONSTANTS = {
  aliasPrefix: {
    root: '~',
    src: '@',
    types: '#',
  },
};

/**
 * @docs https://astro.build/config
 */
export default defineConfig({
  integrations: [
    image(),
    compress({
      path: ['./dist'],
      css: true,
      html: false,
      img: false,
      js: false,
      svg: false,
    }),
  ],
  vite: {
    css: {
      postcss: {
        plugins: [
          postcssPresetEnv({
            autoprefixer: {
              flexbox: false,
              grid: true,
            },
            stage: 3,
            features: {
              'custom-properties': false,
            },
          }),
        ],
      },
    },
    plugins: [yaml()],
    resolve: {
      alias: {
        [CONSTANTS.aliasPrefix.root]: path.resolve(__dirname, './'),
        [CONSTANTS.aliasPrefix.src]: path.resolve(__dirname, './src'),
        [CONSTANTS.aliasPrefix.types]: path.resolve(__dirname, './src/types'),
      },
    },
    define: {
      require: createRequire(import.meta.url),
    },
  },
});
