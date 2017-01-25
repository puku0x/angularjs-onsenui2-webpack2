export default class Page2Controller {
    constructor($log) {
        'ngInject';
        this.title = 'Page 2';
        this.$log = $log;
    }

    pop() {
        navi.popPage();
        this.$log.debug('Pop page');
    }
}
