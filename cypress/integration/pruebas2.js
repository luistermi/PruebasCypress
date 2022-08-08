describe("Pruebas",function(){
    before(()=>{
        cy.log("Inicio general");
    });
    after(()=>{
        cy.log("Fin general");
    });
    beforeEach(()=>{
        cy.visit("http://automationpractice.com/index.php");
    });
    it("Prueba1", function(){
        cy.get('#search_query_top').type("shoes");
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains("shoes");
        
    });
    it("Prueba2", function(){
        cy.get('#search_query_top').type("dress");
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains("dress");
    });
})