
import loc from '../support/locators'

Cypress.Commands.add('clickAlert', (locator, message) => {
  cy.get(locator).click()
  cy.on('window:alert', msg => {
    expect(msg).to.be.equal(message)
  })
})
Cypress.Commands.add('login', (user,password) => {
  cy.visit('https://barrigareact.wcaquino.me/')
  cy.get(loc.LOGIN.USER).type('a@a')
  cy.get(loc.LOGIN.PASSWORD).type('a')
  cy.get(loc.LOGIN.BTN).click()
  cy.get(loc.MESSAGE).should('contain', 'Bem vindo')
})
Cypress.Commands.add('resetApp', () => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.RESET).click()
  })