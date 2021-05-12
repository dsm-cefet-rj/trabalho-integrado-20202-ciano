describe('Cadastrando livros', () => {
    it('cadastrar usuarios no banco', () => { 
        //ir para rota de login        
        cy.visit('http://localhost:3000/login');      
       
        //entrar na tela de login
        cy.get('#username').type('diogo');                
        cy.wait(200);                                 
        cy.get('#password').type('2055582BIB');
        cy.wait(200); 
        cy.get('#entrar').click();
        cy.wait(500);                              
       
        //entrar no menu
        cy.get('#btnManterEmprestimos').click();  
        cy.wait(500); 

        //cadastrar emprestimo
        cy.get('#matricula').type('1055882ADM');
        cy.wait(200); 
        cy.get('#consultar-matricula').click();
        cy.wait(600);
        cy.get('#isbn').type('9788529402024');
        cy.wait(200); 
        cy.get('#consultar-isbn').click();
        cy.wait(600);         
        cy.get('#confirmar').click();


    })

})
