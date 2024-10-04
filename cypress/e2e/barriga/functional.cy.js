// <reference types="cypress" />
import loc from '../../support/locators'
import '../../support/commandsContas'

describe('Should test at a functional level', () => {
    before(() => {
      cy.login('@','a')
      // cy.resetApp()
    })
    
    it('Should create account', () => {
      cy.acessarMenuConta()

      cy.inserirConta('Conta do teste')
      cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso')
    })
    it('Should update account', () => {
      cy.acessarMenuConta()
      cy.xpath(LOC.CONTAS.XP_BTN_ALTERAR).click()
      cy.get(loc.CONTAS.NOME)
      .clear()  
      .type('Conta alterada')
      cy.get(loc.CONTAS.BTN_SALVAR).click()
      cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso')
    })
    it('Should not create an account with same name', () => {
      cy.acessarMenuConta()
      cy.get(loc.CONTAS.NOME).type('Conta aterada')
      cy.get(loc.CONTAS.BTN_SALVAR).click()
      cy.get(loc.MESSAGE).should('contain', 'code 400')
    })
  })