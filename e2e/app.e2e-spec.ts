import { AngularCoursePage } from './app.po';

describe('angular-course App', function() {
  let page: AngularCoursePage;

  beforeEach(() => {
    page = new AngularCoursePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
