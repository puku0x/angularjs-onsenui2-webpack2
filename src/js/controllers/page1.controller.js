export default class Page1Controller {
    constructor($log) {
        'ngInject';
        this.title = 'Page 1';
        this.$log = $log;
    }

    push() {
        navi.pushPage('pages/page2.html');
        this.$log.debug('Push page');
    }
}
