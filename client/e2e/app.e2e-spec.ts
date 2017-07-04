import { MiddlePage } from './app.po';

describe('middle App', () => {
  let page: MiddlePage;

  beforeEach(() => {
    page = new MiddlePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
