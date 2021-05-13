describe('Cadastrando livros', () => {
    it('cadastrar livros no banco', () => { 
        //ir para rota de login        
        cy.visit('http://localhost:3000/login');      
       
        //entrar na tela de login
        cy.get('#username').type('1843234BCC');                
        cy.wait(200);                                 
        cy.get('#password').type('123456');
        cy.wait(200); 
        cy.get('#entrar').click();
        cy.wait(500);                              
       
        //entrar no menu
        cy.get('#btnLivros').click();  
        cy.wait(500); 
        
        //entrar na tela de cadastrar livro
        cy.get('#cadastro').click();  
        cy.wait(500);
        
        //cadastrar livro
        cy.get('#titulo').type('Algebra linear');           
        cy.wait(200);                             
        cy.get('#edicao').type('6');
        cy.wait(200); 
        cy.get('#autores').type('Boldrini');
        cy.wait(200); 
        cy.get('#isbn').type('9788529402024');
        cy.wait(200); 
        cy.get('#qtd_total').type('18');
        cy.wait(200); 
        cy.get('#cod_localizacao').type('S35P2-20');
        cy.wait(200);        
        cy.get('#enviar').click();

    })

})