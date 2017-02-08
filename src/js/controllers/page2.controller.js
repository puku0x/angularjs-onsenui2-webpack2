export default class Page2Controller {
    constructor($log, $window) {
        // DI
        'ngInject';
        this.$log = $log;
        this.$window = $window;
    }

    // 戻る
    pop() {
        window.navi.popPage();
        this.$log.debug('Pop page');
    }

    // 初期化
    init(event) {
        // ページタイトル設定
        const page = event.target;
        this.title = page.data.title;
    }
}
