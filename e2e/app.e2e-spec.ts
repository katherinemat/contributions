import { ContributionsPage } from './app.po';

describe('contributions App', function() {
  let page: ContributionsPage;

  beforeEach(() => {
    page = new ContributionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
