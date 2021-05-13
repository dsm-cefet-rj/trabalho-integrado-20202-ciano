describe('Cadastrando livros', () => {
    it('cadastrar usuarios no banco', () => { 
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
        cy.get('#btnCadastrarUsuario').click();  
        cy.wait(500); 

        //cadastrar usuario
        cy.get('#nome').type('marcelo');           
        cy.wait(200);                             
        cy.get('#categoria').select('Aluno');
        //cy.get('[value="aluno"]');
        cy.wait(200); 
        cy.get('#matricula').type('1055882ADM');
        cy.wait(200); 
        cy.get('#email').type('marcelo2021@outlook.com');
        cy.wait(200); 
        cy.get('#senha').type('77340099');
        cy.wait(200); 
        cy.get('#data_nasc').type('1999-10-25');
        cy.wait(200);  
        cy.get('#telefone').type('(21)99999-9999');
        cy.wait(200);  
        cy.get('#logradouro').type('rua sao francisco xavier');
        cy.wait(200); 
        cy.get('#complemento').type('579 casa 3');
        cy.wait(200); 
        cy.get('#cidade').type('rio de janeiro');
        cy.wait(200); 
        cy.get('#bairro').type('maracana');
        cy.wait(200);  
        cy.get('#cep').type('23530-812');
        cy.wait(200);      
        cy.get('#enviar').click();

    })

})