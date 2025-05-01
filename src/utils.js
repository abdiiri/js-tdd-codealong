// src/utils.js
export function currentAgeForBirthYear(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}
