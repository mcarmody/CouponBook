describe('docs.angularjs.org', function () {
  describe('App', function () {
    // it('should filter the module list when searching', function () {
    //   browser.get();
    //   browser.waitForAngular();

    //   var search = element(by.input('q'));
    //   search.clear();
    //   search.sendKeys('ngBind');

    //   var firstModule = element(by.css('.search-results a'));
    //   expect(firstModule.getText()).toEqual('ngBind');
    // });


    it('should change the page content when clicking a link to a service', function () {
      browser.get('');

      var ngBindLink = element(by.css('.definition-table td a[href="api/ng/directive/ngClick"]'));
      ngBindLink.click();

      var pageBody = element(by.css('h1'));
      expect(pageBody.getText()).toEqual('ngClick');
    });


    it('should show the functioning input directive example', function () {
      browser.get('index-debug.html#!/api/ng/directive/input');

      //Wait for animation
      browser.sleep(500);

      browser.switchTo().frame('example-input-directive');

      var nameInput = element(by.input('user.name'));
      nameInput.sendKeys('!!!');

      var code = element(by.css('tt'));
      expect(code.getText()).toContain('guest!!!');
    });
  });
});