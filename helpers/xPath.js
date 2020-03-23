import xPathToCss from 'xpath-to-css';
import { Selector } from 'testcafe';

export default class XPath {
    constructor (path) {
        let css = xPathToCss(path);
        console.log('XPath to CSS generated: ', css);
        return Selector(css);
    }
}