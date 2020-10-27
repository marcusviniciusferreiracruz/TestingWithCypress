/// <reference types="cypress" />
 
context('Window', () => {
  beforeEach(() => {
    cy.visit('https://martial.24livehost.com/')
  })
   it('open in iphone-6', () => {
    cy.viewport(375, 812)
    cy.viewport('iphone-6')
    cy.screenshot()
    cy.wait(200)
  })

  it('open in ipad-2  ', () => {
      cy.viewport(768, 1024)
      cy.viewport('ipad-2')
      cy.screenshot()
      cy.wait(200)
    })

    it('open in mac -15', () => {
      cy.viewport(375, 812)
      cy.viewport('iphone-x')
      cy.screenshot()
      cy.wait(200)
    })

    it('open in mac -15', () => {
      cy.viewport(375, 812)
      cy.viewport('iphone-x')
      cy.screenshot()
      cy.wait(200)
    })
 })

