import { TMSv2.1Page } from './app.po';

describe('tmsv2.1 App', () => {
  let page: TMSv2.1Page;

  beforeEach(() => {
    page = new TMSv2.1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
