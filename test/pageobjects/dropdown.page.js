class Dropdown {
  get dropdown() {
    return $("select");
  }

  select(value = "Option 2") {
    this.dropdown.selectByVisibleText(value);
  }

  open() {
    browser.url("https://www.google.com");
  }
}

export default new Dropdown();
