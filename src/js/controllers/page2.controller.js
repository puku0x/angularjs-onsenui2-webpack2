export default class Page2Controller {
    constructor($log) {
        // DI
        'ngInject';
        this.$log = $log;
    }

    // 戻る
    pop() {
        navi.popPage();
        this.$log.debug('Pop page');
    }

    // 初期化
    init(event) {
        // ページタイトル設定
        const page = event.target;
        this.title = page.data.title;
    }
}
