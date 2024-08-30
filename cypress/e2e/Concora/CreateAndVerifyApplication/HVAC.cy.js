

const { createGridWithUI, deleteGridWithApi, createApplicationWithUI } = require('../../../pageObjects/application')
let data = require('../../../fixtures/HVACData.json')

describe('HVAC Flow', () => {

  beforeEach(() => {

    // BaseURL is defined in cypress.config.js file
    cy.visit('/referral?partner_key=12461')

    // Called Intercept Routes to use later
    // cy.runRoutes('grid')

    // cy.wait(100000)
    // cy.loginWithUI(Cypress.env('userId'), Cypress.env('password'))
  })
  it('Rented house need a HVAC for Employee', () => {
    createApplicationWithUI(data, 'rentHVACEmployed')
  })
  it('Rented house need a HVAC for Military', () => {
    createApplicationWithUI(data, 'rentHVACMilitary')
  })
  it('Rented house need a HVAC for Not Employee', () => {
    createApplicationWithUI(data, 'rentHVACNotEmployed')
  })
  it('Rented house need a HVAC for Retired', () => {
    createApplicationWithUI(data, 'rentHVACRetired')
  })
  it('Rented house need a HVAC for Self Emplyed', () => {
    createApplicationWithUI(data, 'rentHVACSelfEmployed')
  })
  it('Rented house need a HVAC for Other', () => {
    createApplicationWithUI(data, 'rentHVACOther')
  })

  // Own 

  it('Owned house need a HVAC for Employee', () => {
    createApplicationWithUI(data, 'ownHVACEmployed')
  })
  it('Owned house need a HVAC for Military', () => {
    createApplicationWithUI(data, 'ownHVACMilitary')
  })
  it('Owned house need a HVAC for Not Employee', () => {
    createApplicationWithUI(data, 'ownHVACNotEmployed')
  })
  it('Owned house need a HVAC for Retired', () => {
    createApplicationWithUI(data, 'ownHVACRetired')
  })
  it('Owned house need a HVAC for Self Emplyed', () => {
    createApplicationWithUI(data, 'ownHVACSelfEmployed')
  })
  it('Owned house need a HVAC for Other', () => {
    createApplicationWithUI(data, 'ownHVACOther')
  })
})