import GooglePage from "../pageobjects/google.page";

describe("Google", function () {
  // per mocha have one describe block
  it("should display correct title", async function () {
    await GooglePage.open();

    await expect(browser).toHaveTitleContaining("Google");

    await browser.pause(1000);
  });

  // Assume that CodeCademy will be on first page of googlesearch result

  it("should perform search and navigate to codecademy", async function () {
    const searchTerm = "javascript";
    const desiredResult = "Codecademy";

    await GooglePage.open();

    const cookie = $("div=Reject all");
    await cookie.click();

    await GooglePage.search(searchTerm);
    await GooglePage.clickResult(desiredResult);
  });
});
