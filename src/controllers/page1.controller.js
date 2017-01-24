export default class Page1Controller {
    constructor() {
        this.title = 'Page 1'
    }

    push() {
        navi.pushPage('pages/page2.html');
    }
}
