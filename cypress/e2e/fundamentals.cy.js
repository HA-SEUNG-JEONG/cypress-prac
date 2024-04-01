describe("Fundamental test", () => {
    it.only("Contains correct header text", () => {
        cy.visit("/fundamentals");
        cy.get('[data-test="fundamentals-header"]').should(
            "contain.text",
            "Testing Fundamentals"
        );
    });
    it("Accordian works correctly", () => {
        cy.visit("/fundamentals");
        cy.contains(/Your tests will exist in a describe block/i).should(
            "not.be.visible"
        );
        cy.get('[data-test="accordian-item-1"] div[role="button"]').click();
        cy.contains(/Your tests will exist in a describe block/i).should(
            "be.visible"
        );
        cy.get('[data-test="accordian-item-1"] div[role="button"]').click();
        cy.contains(/Your tests will exist in a describe block/i).should(
            "not.be.visible"
        );
    });
});
