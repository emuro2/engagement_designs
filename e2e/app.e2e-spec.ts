import { EngagementDesignsPage } from './app.po';

describe('engagement-designs App', () => {
  let page: EngagementDesignsPage;

  beforeEach(() => {
    page = new EngagementDesignsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
