import { browser, element, by } from 'protractor';

export class FeaturizePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ftr-root h1')).getText();
  }
}
