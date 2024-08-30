

const { createGridWithUI, deleteGridWithApi, createApplicationWithUI } = require('../../../pageObjects/application')
let data = require('../../../fixtures/electricalData.json')

describe('Electrical Flow', () => {

  beforeEach(() => {

    // BaseURL is defined in cypress.config.js file
    cy.visit('/referral?partner_key=12461')

    // Called Intercept Routes to use later
    // cy.runRoutes('grid')

    // cy.wait(100000)
    // cy.loginWithUI(Cypress.env('userId'), Cypress.env('password'))
  })
  it('Rented house need a Electrical for Employee', () => {
    createApplicationWithUI(data, 'rentElectricalEmployed')
  })
  it('Rented house need a Electrical for Military', () => {
    createApplicationWithUI(data, 'rentElectricalMilitary')
  })
  it('Rented house need a Electrical for Not Employee', () => {
    createApplicationWithUI(data, 'rentElectricalNotEmployed')
  })
  it('Rented house need a Electrical for Retired', () => {
    createApplicationWithUI(data, 'rentElectricalRetired')
  })
  it('Rented house need a Electrical for Self Emplyed', () => {
    createApplicationWithUI(data, 'rentElectricalSelfEmployed')
  })
  it('Rented house need a Electrical for Other', () => {
    createApplicationWithUI(data, 'rentElectricalOther')
  })

  // Own 

  it('Owned house need a Electrical for Employee', () => {
    createApplicationWithUI(data, 'ownElectricalEmployed')
  })
  it('Owned house need a Electrical for Military', () => {
    createApplicationWithUI(data, 'ownElectricalMilitary')
  })
  it('Owned house need a Electrical for Not Employee', () => {
    createApplicationWithUI(data, 'ownElectricalNotEmployed')
  })
  it('Owned house need a Electrical for Retired', () => {
    createApplicationWithUI(data, 'ownElectricalRetired')
  })
  it('Owned house need a Electrical for Self Emplyed', () => {
    createApplicationWithUI(data, 'ownElectricalSelfEmployed')
  })
  it('Owned house need a Electrical for Other', () => {
    createApplicationWithUI(data, 'ownElectricalOther')
  })
})