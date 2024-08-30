

const { createGridWithUI, deleteGridWithApi, createApplicationWithUI } = require('../../../pageObjects/application')
let data = require('../../../fixtures/homeRenovationData.json')

describe('HomeRenovation Flow', () => {

  beforeEach(() => {

    // BaseURL is defined in cypress.config.js file
    cy.visit('/referral?partner_key=12461')

    // Called Intercept Routes to use later
    // cy.runRoutes('grid')

    // cy.wait(100000)
    // cy.loginWithUI(Cypress.env('userId'), Cypress.env('password'))
  })
  it('Rented house need a HomeRenovation for Employee', () => {
    createApplicationWithUI(data, 'rentHomeRenovationEmployed')
  })
  it('Rented house need a HomeRenovation for Military', () => {
    createApplicationWithUI(data, 'rentHomeRenovationMilitary')
  })
  it('Rented house need a HomeRenovation for Not Employee', () => {
    createApplicationWithUI(data, 'rentHomeRenovationNotEmployed')
  })
  it('Rented house need a HomeRenovation for Retired', () => {
    createApplicationWithUI(data, 'rentHomeRenovationRetired')
  })
  it('Rented house need a HomeRenovation for Self Emplyed', () => {
    createApplicationWithUI(data, 'rentHomeRenovationSelfEmployed')
  })
  it('Rented house need a HomeRenovation for Other', () => {
    createApplicationWithUI(data, 'rentHomeRenovationOther')
  })

  // Own 

  it('Owned house need a HomeRenovation for Employee', () => {
    createApplicationWithUI(data, 'ownHomeRenovationEmployed')
  })
  it('Owned house need a HomeRenovation for Military', () => {
    createApplicationWithUI(data, 'ownHomeRenovationMilitary')
  })
  it('Owned house need a HomeRenovation for Not Employee', () => {
    createApplicationWithUI(data, 'ownHomeRenovationNotEmployed')
  })
  it('Owned house need a HomeRenovation for Retired', () => {
    createApplicationWithUI(data, 'ownHomeRenovationRetired')
  })
  it('Owned house need a HomeRenovation for Self Emplyed', () => {
    createApplicationWithUI(data, 'ownHomeRenovationSelfEmployed')
  })
  it('Owned house need a HomeRenovation for Other', () => {
    createApplicationWithUI(data, 'ownHomeRenovationOther')
  })
})