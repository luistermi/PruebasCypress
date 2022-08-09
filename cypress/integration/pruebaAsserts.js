import '../support/commands'

describe("Prueba distintos asserts", function(){

    let a = 2;
    it("Prueba1", function(){
        let a = 1, b = 1;
        cy.log('Soy Luichi');
        cy.logEspecial('Soy Luichi');
        expect(a===b, "Ambos términos tienen que ser iguales y no lo son. Primer término: " + a + ". Segundo término: " + b + ".").to.equal(true);
    });
    it("Prueba2", function(){
        expect(20-20).to.not.equal(1);
    });

    it("Prueba3", function(){
        expect(20===20).to.be.true;
    });
    
    it("Prueba4", function(){
        expect(20===21).to.be.false;
    });

    it("Prueba5", function(){
        expect(20).to.be.lessThan(21);
    });

    it("Prueba6", function(){
        expect(20).to.be.greaterThan(19);
    });

    it("Prueba7", function(){
        expect(a).to.exist;
    });

})