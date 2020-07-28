import mainTemplate from "./atoms/default/server/templates/main.html!text"

import Mustache from 'mustache'
import rp from 'request-promise'

export function render() {
    return rp({
        uri: 'https://interactive.guim.co.uk/docsdata-test/10WlV8bS1zAo9VFARX3bSfQ9y2Rn5onAZMpTPX44XatA.json',
        json: true
    }).then((data) => {
        var sheets = data.sheets;
        console.log(sheets);
        var html = Mustache.render(mainTemplate, sheets);
        return html;
    });
}
