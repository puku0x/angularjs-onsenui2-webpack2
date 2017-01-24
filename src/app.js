import angular from 'angular'

// OnsenUI
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
window.ons = require('onsenui/js/onsenui')

// コントローラ
import MainController from './controllers/main.controller'

// Angularモジュール
angular
    .module('app', ['onsen'])
    .controller('MainController', MainController);

// OnsenUIのAngularバインディングのロードタイミング調整用
angular.element(document).ready(function() {
    require('onsenui/js/angular-onsenui');
    angular.bootstrap(document, ['app']);
});
