export default class Page {
  get gSearch() {
    return $("input[name='q']");
  }

  async search(searchTerm) {
    await this.gSearch.click();
    await this.gSearch.setValue(searchTerm);
    await this.gSearch.keys("Enter");
  }
}
