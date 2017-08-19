import { AngularGithubPagesPage } from './app.po';

describe('angular-github-pages App', () => {
  let page: AngularGithubPagesPage;

  beforeEach(() => {
    page = new AngularGithubPagesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
