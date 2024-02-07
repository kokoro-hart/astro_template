# Astro basic template
Templates for developing websites and web applications in Astro.

## Stacks
- [Astro@2.0.11](https://astro.build/ "Astro@2.0.11")
- integrations
  - [@astrojs/image](https://github.com/withastro/astro/tree/main/packages/integrations/image/ "@astrojs/image")
  - [@astrojs/sitemap](https://github.com/withastro/astro/tree/main/packages/integrations/sitemap/ "@astrojs/sitemap")
  - [astro-compress](https://github.com/astro-community/astro-compress "astro-compress")
- CSS (Sass + PostCSS Plugins)
  - cssModules
  - glob @use
  - autoprefixer
- TypeScript
- markuplint
- ESLint
- Stylelint
- pretteir
- commitlint
- husky
- hygen

## Environment
Node.js v16.19.0

If you are using nvm (Node Version Manager) for version management, run the nvm use command to switch to the specified version.

```
nvm use
```

If you see the following message, please install it by running nvm install 16.19.0:

```
Found '/〜/.nvmrc' with version <16.19.0>
N/A: version "16.19.0 -> N/A" is not yet installed.

You need to run "nvm install 16.19.0" to install it before using it.
```

## Commands

| to do            | Command              | Action                                             |
| :--------------------- | :--------------------- | :------------------------------------------------- |
| Install         | `npm ci`         | Install dependencies from package-lock.json                             |
| Development         | `npm run dev`             | Start a local server at localhost:3000     |
| Build         | `npm run build`           | Generate build files in `./dist/`            |
| Preview         | `npm run preview`         | Preview the build environment locally       |


## Creating an Astro Component

```
npm run new:ac
```

The above command will create component files.

- ComponentName.astro
- ComponentName.module.scss


## husky

Various linters and formatters are executed on pre-commit.
If the commit is interrupted, please resolve the errors and commit again.

- markuplint
- ESLint
- Stylelint
- commitlint
- Prettier
