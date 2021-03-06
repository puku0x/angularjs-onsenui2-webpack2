export default class Page2Controller {
    /* @ngInject */
    constructor($log, $timeout, $window) {
        // DI
        this.$log = $log;
        this.$window = $window;
        this.$timeout = $timeout;
    }

    // 戻る
    pop() {
        this.navigator.popPage();
        this.$log.debug('Pop page');
    }

    // 初期化
    init($event) {
        this.$timeout(() => {
            // 変数
            this.navigator = this.$window.navi;

            // ページタイトル設定
            const page = $event.target;
            this.title = page.data.title;
        });
    }
}
