export default class Page1Controller {
    constructor($log, $window) {
        // DI
        'ngInject';
        this.$log = $log;
        this.navigator = $window.navi;

        // ページタイトル
        this.title = 'Page 1';
    }

    // 次へ
    push() {
        const options = {
            data: {
                title: 'Page 2'
            }
        };
        this.navigator.pushPage('pages/page2.html', options);
        this.$log.debug('Push page');
    }

    // 初期化
    init(event) {
        const page = event.target;
        this.$log.debug(page.data);
    }
}