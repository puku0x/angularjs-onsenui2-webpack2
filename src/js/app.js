// Angular
import angular from 'angular';

// OnsenUI
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
window.ons = require('onsenui/js/onsenui');

// コントローラ
import Page1Controller from './controllers/page1.controller';
import Page2Controller from './controllers/page2.controller';

// スタイル
import '../scss/style.scss';

// Angularモジュール
angular
    .module('app', ['onsen'])
    .controller('Page1Controller', Page1Controller)
    .controller('Page2Controller', Page2Controller);

// OnsenUIのAngularバインディングのロードタイミング調整用
angular.element(document).ready(function() {
    require('onsenui/js/angular-onsenui');
    angular.bootstrap(document, ['app']);
});
