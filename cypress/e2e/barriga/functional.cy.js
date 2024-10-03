/// <reference types="cypress" />
import loc from '../../support/locators'

describe('Should test at a functional level', () => {
    before(() => {
      cy.login('@','a')
      cy.resetApp()
    })
    
    it('Should create account', () => {
      cy.get(loc.MENU.SETTINGS).click()
      cy.get(loc.MENU.CONTAS).click()
      cy.get(loc.CONTAS.NOME).type("Conta yuri")
      cy.get(loc.CONTAS.BTN_SALVAR).click()
      cy.get(loc.MESSAGE).should('contain','Conta inserida com sucesso')
    })
    it('Should update account', () => {
      cy.get(loc.MENU.SETTINGS).click()
      cy.get(loc.MENU.CONTAS).click()
      cy.xpath(LOC.CONTAS.XP_BTN_ALTERAR).click()
      cy.get(loc.CONTAS.NOME)
      .clear()  
      .type('Conta alterada')
      cy.get(loc.CONTAS.BTN_SALVAR).click()
      cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso')
    })
  })