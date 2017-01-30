export default class Page2Controller {
    constructor($log) {
        // DI
        'ngInject';
        this.$log = $log;

        // 引数からページタイトル設定
        const args = navi.topPage.pushedOptions;
        this.title = args.title;
    }

    // 戻る
    pop() {
        navi.popPage();
        this.$log.debug('Pop page');
    }
}
