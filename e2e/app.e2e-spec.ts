import { AngularCryptoPage } from './app.po';

describe('angular-crypto App', () => {
  let page: AngularCryptoPage;

  beforeEach(() => {
    page = new AngularCryptoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
