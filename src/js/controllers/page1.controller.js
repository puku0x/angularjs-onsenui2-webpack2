export default class Page1Controller {
    /* @ngInject */
    constructor($log, $timeout, $window) {
        // DI
        this.$log = $log;
        this.$window = $window;
        this.$timeout = $timeout;
    }

    // 次へ
    push() {
        const options = {
            data: {
                title: 'Page 2'
            }
        };
        this.navigator.pushPage('html/page2.html', options);
        this.$log.debug('Push page');
    }

    // 初期化
    init() {
        this.$timeout(() => {
            // 変数
            this.navigator = this.$window.navi;
            this.title = 'Page 1';
        });
    }
}