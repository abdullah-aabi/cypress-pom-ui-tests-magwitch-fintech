

const { createGridWithUI, deleteGridWithApi, createApplicationWithUI } = require('../../../pageObjects/application')
let data = require('../../../fixtures/fencingData.json')

describe('Fencing Flow', () => {

  beforeEach(() => {

    // BaseURL is defined in cypress.config.js file
    cy.visit('/referral?partner_key=12461')

    // Called Intercept Routes to use later
    // cy.runRoutes('grid')

    // cy.wait(100000)
    // cy.loginWithUI(Cypress.env('userId'), Cypress.env('password'))
  })
  it('Rented house need a Fencing for Employee', () => {
    createApplicationWithUI(data, 'rentFencingEmployed')
  })
  it('Rented house need a Fencing for Military', () => {
    createApplicationWithUI(data, 'rentFencingMilitary')
  })
  it('Rented house need a Fencing for Not Employee', () => {
    createApplicationWithUI(data, 'rentFencingNotEmployed')
  })
  it('Rented house need a Fencing for Retired', () => {
    createApplicationWithUI(data, 'rentFencingRetired')
  })
  it('Rented house need a Fencing for Self Emplyed', () => {
    createApplicationWithUI(data, 'rentFencingSelfEmployed')
  })
  it('Rented house need a Fencing for Other', () => {
    createApplicationWithUI(data, 'rentFencingOther')
  })

  // Own 

  it('Owned house need a Fencing for Employee', () => {
    createApplicationWithUI(data, 'ownFencingEmployed')
  })
  it('Owned house need a Fencing for Military', () => {
    createApplicationWithUI(data, 'ownFencingMilitary')
  })
  it('Owned house need a Fencing for Not Employee', () => {
    createApplicationWithUI(data, 'ownFencingNotEmployed')
  })
  it('Owned house need a Fencing for Retired', () => {
    createApplicationWithUI(data, 'ownFencingRetired')
  })
  it('Owned house need a Fencing for Self Emplyed', () => {
    createApplicationWithUI(data, 'ownFencingSelfEmployed')
  })
  it('Owned house need a Fencing for Other', () => {
    createApplicationWithUI(data, 'ownFencingOther')
  })
})