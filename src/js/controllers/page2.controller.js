export default class Page2Controller {
    constructor($log) {
        'ngInject';
        const args = navi.topPage.pushedOptions;
        this.title = args.title;
        this.$log = $log;
    }

    pop() {
        navi.popPage();
        this.$log.debug('Pop page');
    }
}
