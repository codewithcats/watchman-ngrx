import { WatchmanPage } from './app.po';

describe('watchman App', () => {
  let page: WatchmanPage;

  beforeEach(() => {
    page = new WatchmanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
