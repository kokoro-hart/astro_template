# Astro basic template

![astro](astro.svg)

- Astro@2.0.11
- integrations
  - @astrojs/image
  - @astrojs/sitemap
  - astro-compress
- CSS (Sass + PostCSS Plugins)
  - cssModules
  - glob @use
  - autoprefixer
- TypeScript
- markuplint
- eslint
- stylelint
- pretteir
- commitlint
- husky

## 環境

Node.js v18.13.0

バージョン管理にnvm(Node Version Manager)を利用している環境では、`nvm use`コマンドの実行で指定のバージョンに切り替わります。

```
nvm use
```

下記メッセージが表示された場合は、`nvm install 18.13.0`でインストールしてください。

```
Found '/パス省略/.nvmrc' with version <18.13.0>
N/A: version "18.13.0 -> N/A" is not yet installed.

You need to run "nvm install 18.13.0" to install it before using it.
```

## コマンド

| to do            | Command              | Action                                             |
| :--------------------- | :--------------------- | :------------------------------------------------- |
| インストール         | `npm ci`         | package-lock.json から依存関係をインストールする                             |
| 開発         | `npm run dev`             | ローカルサーバー`localhost:3000`で起動する     |
| ビルド         | `npm run build`           | `./dist/`直下にビルドファイルを生成する            |
| プレビュー         | `npm run preview`         | ローカルでビルド環境のプレビューを行う       |
