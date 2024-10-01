/// <reference types="cypress" />

describe('Should test at a functional level', () => {
    before(() => {
      cy.visit('barrigareact.wcaquino.me')
      cy.get('[data-test=email]').type('a@a')
      cy.get('[data-test=passwd]').type('a')
      cy.get('.btn').click()
      cy.get('.toast-message').should('contain', 'Bem vindo')
    })
    
    it('Should', () => {
    })
    
  })