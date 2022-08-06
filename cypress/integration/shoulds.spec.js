/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('http://localhost:5000/');
})

describe('Shoulds', function() {
    it('Formulario', function() {
        // type e utilizado para 'escrever' valores em inputs
        cy.get('#email').type('vitor.vicente@edu.com.br')
        cy.get('#pass').type('dualcore')
        cy.get('#address').type('Rua David Cannabarro')
        cy.get('#address2').type('Rua Tenente virmondes')
        cy.get('#city').type('Uberlandia')
        cy.get('#state').select('São Paulo', 'SP')
        cy.get('#zip').type('38400-110')
        cy.get('input[type=checkbox]').check()
        cy.get('[min="140"]').type('Aula 3 shoulds')
        
        // assertivas
        cy.get('#email').should('have.value', 'vitor.vicente@edu.com.br')
        cy.get('.btn').should('have.class', 'btn-primary')

        cy.get('#email')
            .then($el => {
                expect($el[0].value).to.be.equals('vitor.vicente@edu.com.br')
            })
        //cy.get('.btn').click()
    })
})