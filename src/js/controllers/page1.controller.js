export default class Page1Controller {
    constructor($log) {
        'ngInject';
        this.title = 'Page 1';
        this.$log = $log;
    }

    push() {
        const options = {
            title: 'Page 2',
        };
        navi.pushPage('pages/page2.html', options);
        this.$log.debug('Push page');
    }
}
