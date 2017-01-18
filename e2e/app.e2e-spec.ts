import { TMSv2Page } from './app.po';

describe('tmsv2 App', function() {
  let page: TMSv2Page;

  beforeEach(() => {
    page = new TMSv2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
