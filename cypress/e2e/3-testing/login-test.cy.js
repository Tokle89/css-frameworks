describe("login error  test", () => {
  it("get error message when logging in", () => {
    cy.visit("http://localhost:5500");

    cy.get("#email").type("toklus234@gmail.com");
    // cy.get("#mail").should("have.value", "toklus234@gmail.com");

    cy.get("#Password").type("password123");
    // cy.get("#Password").should("have.value", "password123");

    cy.get("#login-btn").click();

    cy.get(".login-msg").contains("Wrong username or password");
  });
});

// describe("The Home Page", () => {
//   it("successfully loads", () => {
//     cy.visit("http://localhost:5500");
//   });
// });
