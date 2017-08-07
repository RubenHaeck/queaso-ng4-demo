import { QueasoNg4DemoPage } from './app.po';

describe('queaso-ng4-demo App', () => {
  let page: QueasoNg4DemoPage;

  beforeEach(() => {
    page = new QueasoNg4DemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
