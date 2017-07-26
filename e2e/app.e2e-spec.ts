import { Ng2FundamentalsPage } from './app.po';

describe('ng2-fundamentals App', () => {
  let page: Ng2FundamentalsPage;

  beforeEach(() => {
    page = new Ng2FundamentalsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
