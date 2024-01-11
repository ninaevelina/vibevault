beforeEach("should visit the albumspage before each test", () => {
  cy.visit("/albums");
});

describe("testing document title", () => {
  it("should show document title", () => {
    cy.title().should("eq", "VibeVault");
  });
});

describe("tests if albumcards are rendered", () => {
  it("should display 19 albumcards", () => {
    cy.get(".album").should("have.length", 19);
  });
});

describe("tests if albumcards contain alt attribute", () => {
  it("should check if images have alt attributes for accessibility purposes", () => {
    cy.get("img").should("have.attr", "alt");
  });
});

describe("tests if genre buttons are displayed", () => {
  it("should render nine genre buttons", () => {
    cy.get("button").should("have.length", "9");
  });
});

describe("tests if links have href attributes", () => {
  it("should return links that have href-attributes", () => {
    cy.get("a").should("have.attr", "href");
  });
});

describe("tests if user can type in input-element", () => {
  it("should display the users' entered input text", () => {
    cy.get("input").type("Skrillex").should("have.value", "Skrillex");
  });
});

describe("tests if album links are clickable", () => {
  it("should allow user to click link", () => {
    cy.contains("View Album").click();
  });
});

describe("testing url", () => {
  it("should get url", () => {
    cy.url().should("eq", "http://localhost:3000/albums");
  });
});
