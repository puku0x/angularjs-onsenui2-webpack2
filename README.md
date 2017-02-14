[![Build Status][travis-ci-image]][travis-ci-url]
[![Dependency status][david-dm-image]][david-dm-url]
[![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]
# AngularJS + Onsen UI 2 + Webpack2 + PhoneGap

[PhoneGap](http://phonegap.com/) を使ったハイブリッドアプリのひな形に [Webpack](https://webpack.github.io/) による SCSS と ES2016 のトランスパイルを組み込んだもの。

ビルドツールは npm と Webpack のみ。

フロントエンドのフレームワークは [AngularJS](https://angularjs.org/) と [Onsen UI 2](https://onsen.io/) を採用しています。

## 必要なもの
- [Node.js](https://nodejs.org/)

## 使い方
リポジトリをクローン
```
$ git clone https://github.com/puku0x/angular-onsenui2-webpack2.git
```

依存パッケージをインストール
```
$ cd クローン先のディレクトリ
$ npm i
```

ビルド & プレビュー
```
$ npm start
```
これだけ！

ビルド後、ブラウザで `http://localhost:3000` を開くとプレビューされます。

`/src`内または、`/www`内のファイルに変更を加えると自動的にリロードされます。

[travis-ci-url]: http://travis-ci.org/puku0x/angular-onsenui2-webpack2
[travis-ci-image]: https://travis-ci.org/puku0x/angular-onsenui2-webpack2.svg?branch=master
[david-dm-url]:https://david-dm.org/puku0x/angular-onsenui2-webpack2
[david-dm-image]:https://david-dm.org/puku0x/angular-onsenui2-webpack2.svg
[david-dm-dev-url]:https://david-dm.org/puku0x/angular-onsenui2-webpack2?type=dev
[david-dm-dev-image]:https://david-dm.org/puku0x/angular-onsenui2-webpack2/dev-status.svg
