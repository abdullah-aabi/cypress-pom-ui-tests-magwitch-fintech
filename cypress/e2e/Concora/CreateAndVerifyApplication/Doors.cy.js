

const { createGridWithUI, deleteGridWithApi, createApplicationWithUI } = require('../../../pageObjects/application')
let data = require('../../../fixtures/concoraApplicationsData.json')

describe('Door Flow', () => {

  beforeEach(() => {

    // BaseURL is defined in cypress.config.js file
    cy.visit('/referral?partner_key=12461')

    // Called Intercept Routes to use later
    // cy.runRoutes('grid')

    // cy.wait(100000)
    // cy.loginWithUI(Cypress.env('userId'), Cypress.env('password'))
  })
  it('Rented house need a Door for Employee', () => {
    createApplicationWithUI(data, 'rentDoorEmployed')
  })
  it('Rented house need a Door for Military', () => {
    createApplicationWithUI(data, 'rentDoorMilitary')
  })
  it('Rented house need a Door for Not Employee', () => {
    createApplicationWithUI(data, 'rentDoorNotEmployed')
  })
  it('Rented house need a Door for Retired', () => {
    createApplicationWithUI(data, 'rentDoorRetired')
  })
  it('Rented house need a Door for Self Emplyed', () => {
    createApplicationWithUI(data, 'rentDoorSelfEmployed')
  })
  it('Rented house need a Door for Other', () => {
    createApplicationWithUI(data, 'rentDoorOther')
  })

  // Own 

  it('Owned house need a Door for Employee', () => {
    createApplicationWithUI(data, 'ownDoorEmployed')
  })
  it('Owned house need a Door for Military', () => {
    createApplicationWithUI(data, 'ownDoorMilitary')
  })
  it('Owned house need a Door for Not Employee', () => {
    createApplicationWithUI(data, 'ownDoorNotEmployed')
  })
  it('Owned house need a Door for Retired', () => {
    createApplicationWithUI(data, 'ownDoorRetired')
  })
  it('Owned house need a Door for Self Emplyed', () => {
    createApplicationWithUI(data, 'ownDoorSelfEmployed')
  })
  it('Owned house need a Door for Other', () => {
    createApplicationWithUI(data, 'ownDoorOther')
  })
})