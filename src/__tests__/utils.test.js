// src/__tests__/utils.test.js
import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    // Arrange
    const currentYear = new Date().getFullYear();
    const birthYear = 1984;
    const expectedAge = currentYear - birthYear;

    // Act
    const actualAge = currentAgeForBirthYear(birthYear);

    // Assert
    expect(actualAge).toBe(expectedAge);
  });
});
