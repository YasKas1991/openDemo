import Page from "./page";

class GooglePage extends Page {
  async clickResult(thing2Click) {
    return $(`h3*=${thing2Click}`).click();
  }

  open() {
    return browser.url("https://www.google.com");
  }
}

export default new GooglePage();
