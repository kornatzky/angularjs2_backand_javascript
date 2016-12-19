import { Angularjs2BackandJavascriptPage } from './app.po';

describe('angularjs2-backand-javascript App', function() {
  let page: Angularjs2BackandJavascriptPage;

  beforeEach(() => {
    page = new Angularjs2BackandJavascriptPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
