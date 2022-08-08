describe("Pruebas",function(){
    it("Prueba1", function(){
        cy.visit("http://automationpractice.com/index.php");
        cy.get('#search_query_top').type("shoes");
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains("shoes");
        
    })
})