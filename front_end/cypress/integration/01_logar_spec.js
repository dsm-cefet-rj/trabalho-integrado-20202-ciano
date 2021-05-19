describe('Logar usuario', () => {
    it('fazendo login', () => { 
        //ir para rota de login        
        cy.visit('http://localhost:3000/login');      
       
        //entrar na tela de login
        cy.get('#username').type('1843234BCC');                
        cy.wait(200);                                 
        cy.get('#password').type('123456');
        cy.wait(200); 
        cy.get('#entrar').click();

        cy.wait(400); 
        cy.url().should('eq', 'http://localhost:3000/menu');
    })

})
