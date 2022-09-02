import DropDownPage from "../pageobjects/dropdown";

describe("Dropdown", function () {
  test("should select correct option", async function () {
    await DropDownPage.open();

    await DropDownPage.makeChoice("label=Option 2");

    await expect(DropDownPage.dropdown).toHaveValueContaining("2");
  });
});
