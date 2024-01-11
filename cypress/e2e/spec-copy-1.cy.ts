beforeEach("should visit the albumspage before each test", () => {
  cy.visit("/albums");
});

describe("testing document title", () => {
  it("should show document title", () => {
    cy.title().should("eq", "VibeVault");
  });
});
