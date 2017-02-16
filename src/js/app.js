// Angular
import angular from 'angular';

// OnsenUI
window.ons = require('onsenui');
require('onsenui/js/angular-onsenui');
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

// コントローラ
import Page1Controller from './controllers/page1.controller';
import Page2Controller from './controllers/page2.controller';

// スタイル
import '../css/style.scss';

// 起動
ons.bootstrap('app', ['onsen']);

// Angularモジュール
angular
    .module('app')
    .controller('Page1Controller', Page1Controller)
    .controller('Page2Controller', Page2Controller);
