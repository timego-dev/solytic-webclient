import "@/main";
import HomePage from "@/pages/HomePage.vue";
import LoginPage from "@/pages/LoginPage.vue";

describe("Cypress Test", () => {
  it("LoginPage Test", () => {
    cy.mount(LoginPage);

    cy.wait(1000);
    cy.get("button").click();

    cy.wait(1000);
    cy.get("[name=email]").type("test");
    cy.get("[name=email]").blur();

    cy.wait(1000);
    cy.get("[name=email]").type("@user.com");
    cy.get("[name=email]").blur();

    cy.wait(1000);
    cy.get("[name=password]").type("pass");
    cy.get("[name=password]").blur();

    cy.wait(1000);
    cy.get("button").click();

    cy.wait(1000);
    cy.get("[name=password]").type("word");
    cy.get("[name=password]").blur();

    cy.wait(1000);
    cy.get("button").click();
    cy.wait(1000);
  });

  it("HomePage Test", () => {
    cy.mount(HomePage);

    cy.wait(2000);
    cy.get("button").click();
    cy.wait(1000);

    cy.mount(LoginPage);
  });
});
