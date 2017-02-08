# AngularJS + Onsen UI 2 + PhoneGap + ES2015 + Sass + Webpack
[![Build Status][travis-ci-img]][travis-ci-url]

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

[travis-ci-img]: https://travis-ci.org/phonegap/phonegap-cli.svg?branch=master
[travis-ci-url]: http://travis-ci.org/phonegap/phonegap-cli
