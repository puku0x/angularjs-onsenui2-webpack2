// Angular
import angular from 'angular';

// OnsenUI
window.ons = require('onsenui');
require('onsenui/js/angular-onsenui');
import 'onsenui/css/onsenui';
import 'onsenui/css/onsen-css-components';

// コントローラ
import Page1Controller from './controllers/page1.controller';
import Page2Controller from './controllers/page2.controller';

// スタイル
import '../css/style';
//import '../scss/style';

// ページテンプレート
import Page1Template from '../html/page1';
import Page2Template from '../html/page2';

// 起動
ons.bootstrap('app', ['onsen']);

// Angularモジュール
angular
    .module('app')
    .controller('Page1Controller', Page1Controller)
    .controller('Page2Controller', Page2Controller)
    .run(($templateCache) => {
        /* @ngInject */
        $templateCache.put('pages/page1.html', Page1Template);
        $templateCache.put('pages/page2.html', Page2Template);
    })  
