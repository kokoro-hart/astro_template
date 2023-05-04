import { createRequire } from "module"
import path from "path"
import { fileURLToPath } from "url"

import image from "@astrojs/image"
import sitemap from "@astrojs/sitemap"
import yaml from "@rollup/plugin-yaml"
import { defineConfig } from "astro/config"
import compress from "astro-compress"
import postcssPresetEnv from "postcss-preset-env"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export const CONSTANTS = {
  aliasPrefix: {
    root: "~",
    src: "@",
    types: "#",
  },
}

/**
 * @docs https://astro.build/config
 */
export default defineConfig({
  site: "https://wd-flat.com/",
  integrations: [
    image(),
    compress({
      // minify指定
      path: ["./dist"],
      css: true,
      js: true,
      html: false,
      img: false,
      svg: true,
    }),
    sitemap(),
  ],
  vite: {
    build: {
      // MEMO: viteのminifyを常時falseにすることでcompressでの上書きを許容する
      minify: false,
    },
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
              "custom-properties": false,
            },
          }),
        ],
      },
    },
    plugins: [yaml()],
    resolve: {
      alias: {
        [CONSTANTS.aliasPrefix.root]: path.resolve(__dirname, "./"),
        [CONSTANTS.aliasPrefix.src]: path.resolve(__dirname, "./src"),
        [CONSTANTS.aliasPrefix.types]: path.resolve(__dirname, "./src/types"),
      },
    },
    define: {
      require: createRequire(import.meta.url),
    },
  },
})
