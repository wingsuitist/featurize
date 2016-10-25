import { FeaturizePage } from './app.po';

describe('featurize App', function() {
  let page: FeaturizePage;

  beforeEach(() => {
    page = new FeaturizePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ftr works!');
  });
});
