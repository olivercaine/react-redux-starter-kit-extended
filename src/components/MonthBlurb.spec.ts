import { MonthBlurb } from "./MonthBlurb";

describe("Month is Feb", () => {
  describe("Building blurb text", () => {
    it("Returns which month it is", () => {
      // Arrange
      const month = "feb";

      // Act
      const text = MonthBlurb();

      // Assert
      // expect(text).to.equal('The current month is feb according to TypeScript');
    });
  });
});
