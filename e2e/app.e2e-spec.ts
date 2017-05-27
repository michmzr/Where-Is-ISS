import {WhereIsIssPage} from "./app.po";

describe('where-is-iss App', () =>
{
    let page: WhereIsIssPage;

    beforeEach(() =>
    {
        page = new WhereIsIssPage();
    });

    it('should display message saying app works', () =>
    {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
