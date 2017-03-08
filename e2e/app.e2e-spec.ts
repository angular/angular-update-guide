import { AngularUpgradeGuidePage } from './app.po';

describe('angular-upgrade-guide App', () => {
  let page: AngularUpgradeGuidePage;

  beforeEach(() => {
    page = new AngularUpgradeGuidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
