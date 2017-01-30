export default class Page1Controller {
    constructor($log) {
        // DI
        'ngInject';
        this.$log = $log;

        // ページタイトル
        this.title = 'Page 1';
    }

    // 次へ
    push() {
        const options = {
            title: 'Page 2',
        };
        navi.pushPage('pages/page2.html', options);
        this.$log.debug('Push page');
    }
}
