import { CliStarterPage } from './app.po';

describe('cli-starter App', () => {
  let page: CliStarterPage;

  beforeEach(() => {
    page = new CliStarterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
