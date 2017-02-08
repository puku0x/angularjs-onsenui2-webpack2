[![Build Status][travis-ci-image]][travis-ci-url]
[![Dependency status][david-dm-image]][david-dm-url]
[![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]
# AngularJS + Onsen UI 2 + PhoneGap + ES2015 + Sass + Webpack

PhoneGap を使ったハイブリッドアプリのひな形に Webpack による Sass と ES2015 のトランスパイルを組み込んだもの。

ビルドツールは npm と Webpack のみ。

フロントエンドのフレームワークは Angular 1.x と Onsen UI 2 を採用しています。

## 必要なもの
- Node.js

## 使い方
依存パッケージをインストール
```
$ npm i
```

ビルド & プレビュー
```
$ npm start
```
これだけ！

開発中のアプリは http://localhost:3000 からプレビュー可能。

`/src`内または、`/www`内のファイルに変更を加えると自動的にリロードがかかります。

[travis-ci-url]: http://travis-ci.org/puku0x/angular-onsenui2-es2015
[travis-ci-image]: https://travis-ci.org/puku0x/angular-onsenui2-es2015.svg?branch=master
[david-dm-url]:https://david-dm.org/puku0x/angular-onsenui2-es2015
[david-dm-image]:https://david-dm.org/puku0x/angular-onsenui2-es2015.svg
[david-dm-dev-url]:https://david-dm.org/puku0x/angular-onsenui2-es2015?type=dev
[david-dm-dev-image]:https://david-dm.org/puku0x/angular-onsenui2-es2015/dev-status.svg
