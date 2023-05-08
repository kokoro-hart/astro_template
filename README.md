![astro-logo](astro_logo.svg)

# FLAT Astroテンプレート

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

## 環境

Node.js v16.19.0

バージョン管理にnvm(Node Version Manager)を利用している環境では、`nvm use`コマンドの実行で指定のバージョンに切り替わります。

```
nvm use
```

下記メッセージが表示された場合は、`nvm install 16.19.0`でインストールしてください。

```
Found '/パス省略/.nvmrc' with version <16.19.0>
N/A: version "16.19.0 -> N/A" is not yet installed.

You need to run "nvm install 16.19.0" to install it before using it.
```

## コマンド

| to do            | Command              | Action                                             |
| :--------------------- | :--------------------- | :------------------------------------------------- |
| インストール         | `npm ci`         | package-lock.json から依存関係をインストールする                             |
| 開発         | `npm run dev`             | ローカルサーバー`localhost:3000`で起動する     |
| ビルド         | `npm run build`           | `./dist/`直下にビルドファイルを生成する            |
| プレビュー         | `npm run preview`         | ローカルでビルド環境のプレビューを行う       |


## Astro Componentの作成

```
npm run new:ac
```

上記のコマンドでコンポーネントファイルが作成されます。

- ComponentName.astro
- ComponentName.module.scss


## husky

pre-commitで各種リンターやフォーマッターを実行しています。  
commitが中断された場合は、エラーを解消した上で再度commitお願いします。

- markuplint
- ESLint
- Stylelint
- commitlint
- Prettier
