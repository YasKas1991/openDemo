class Dropdown {
  get dropdown() {
    return $("select");
  }

  makeChoice(choiceIWant = "label=Option 2") {
    this.dropdown.selectByVisibleText(choiceIWant);
  }

  open() {
    browser.url("https://the-internet.herokuapp.com/dropdown");
  }
}

export default new Dropdown();
