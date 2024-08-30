import gridLocators from '../locators/applicationLocators'
// let concoraApplicationsData = require('../fixtures/concoraApplicationsData.json')

var uniqueID = 'id' + (new Date()).getTime();

export function createApplicationWithUI(concoraApplicationsData, data) {

    cy.get(gridLocators.startApplicationButton).should('be.visible').click()

    cy.get(gridLocators.customerInfo.personalInfo.firstName)
        .should('be.visible')
        .type(concoraApplicationsData[data].customerInfo.personalInfo.firstName)

    cy.get(gridLocators.customerInfo.personalInfo.lastName)
        .should('be.visible')
        .type(concoraApplicationsData[data].customerInfo.personalInfo.lastName)

    cy.get(gridLocators.customerInfo.personalInfo.dateOfBirth)
        .should('be.visible')
        .type(concoraApplicationsData[data].customerInfo.personalInfo.dateOfBirth)

    cy.get(gridLocators.customerInfo.personalInfo.addressInputDropdown.dropdown)
        .should('be.visible')
        .type(concoraApplicationsData[data].customerInfo.personalInfo.addressInputDropdown.dropdown)

    cy.get(gridLocators.customerInfo.personalInfo.addressInputDropdown.option)
        .contains(concoraApplicationsData[data].customerInfo.personalInfo.addressInputDropdown.option)
        .click()

    cy.get(gridLocators.customerInfo.personalInfo.zipCode)
        .should('be.visible')
        .type(concoraApplicationsData[data].customerInfo.personalInfo.zipCode)

    cy.get(gridLocators.customerInfo.personalInfo.rentCheckButton)
        .contains(concoraApplicationsData[data].customerInfo.personalInfo.rentOrOwnCheckButton)
        .click()

    // Driving liscence

    cy.get(gridLocators.customerInfo.drivingLiscenceInfo.documentNumber)
        .should('be.visible')
        .type(concoraApplicationsData[data].customerInfo.drivingLiscenceInfo.documentNumber)

    cy.get(gridLocators.customerInfo.drivingLiscenceInfo.documentIssuenceDate)
        .should('be.visible')
        .type(concoraApplicationsData[data].customerInfo.drivingLiscenceInfo.documentIssuenceDate)

    cy.get(gridLocators.customerInfo.drivingLiscenceInfo.documentExpirationDate)
        .should('be.visible')
        .type(concoraApplicationsData[data].customerInfo.drivingLiscenceInfo.documentExpirationDate)

    cy.get(gridLocators.customerInfo.drivingLiscenceInfo.documentIssuenceStateInputDropdown.dropdown)
        .should('be.visible')
        .type(concoraApplicationsData[data].customerInfo.drivingLiscenceInfo.documentIssuenceStateInputDropdown.dropdown)

    cy.get(gridLocators.customerInfo.drivingLiscenceInfo.documentIssuenceStateInputDropdown.option)
        .contains(concoraApplicationsData[data].customerInfo.drivingLiscenceInfo.documentIssuenceStateInputDropdown.option)
        .click()

    cy.get(gridLocators.nextButton).should('be.visible').click()

    // product info

    cy.get(gridLocators.productInfo.financingTypeInputDropdown.dropdown)
        .parent()
        .should('be.visible')
        .click()

    cy.get(gridLocators.productInfo.financingTypeInputDropdown.option)
        .contains(concoraApplicationsData[data].productInfo.financingTypeInputDropdown.option)
        .click()

    cy.get(gridLocators.productInfo.financingAmount)
        .should('be.visible')
        .type(concoraApplicationsData[data].productInfo.financingAmount)

    cy.get(gridLocators.productInfo.financingAmountConfirm)
        .should('be.visible')
        .type(concoraApplicationsData[data].productInfo.financingAmountConfirm)

    cy.get(gridLocators.nextButton).should('be.visible').click()


    //Income Verification

    cy.get(gridLocators.incomeVerification.annualIncome)
        .should('be.visible')
        .type(concoraApplicationsData[data].incomeVerification.annualIncome)

    cy.get(gridLocators.incomeVerification.employmentStatusDropdown.dropdown)
        .parent()
        .should('be.visible')
        .click()

    cy.get(gridLocators.incomeVerification.employmentStatusDropdown.option)
        .contains(concoraApplicationsData[data].incomeVerification.employmentStatusDropdown.option)
        .click()

    if (!data.includes('Military') && !data.includes('Retired')) {
        cy.get(gridLocators.incomeVerification.companyName)
            .should('be.visible')
            .type(concoraApplicationsData[data].incomeVerification.companyName)
    }
    cy.get(gridLocators.nextButton).should('be.visible').click()

    // Authorization

    cy.get(gridLocators.authorization.phone)
        .should('be.visible')
        .type(concoraApplicationsData[data].authorization.phone)

    cy.get(gridLocators.authorization.email)
        .should('be.visible')
        .type(concoraApplicationsData[data].authorization.email)

    cy.get(gridLocators.authorization.ssn)
        .should('be.visible')
        .type(concoraApplicationsData[data].authorization.ssn)

    cy.get(gridLocators.authorization.smsVerificationButton).should('be.visible').click()
    cy.get(gridLocators.authorization.smsVerificationButton).contains('Tap to Enter').click()
    cy.get(gridLocators.authorization.codeVerificationInput)
        .eq(0)
        .should('be.visible')
        .type(concoraApplicationsData[data].authorization.smsCodeVerificationInput.split('')[0])
    cy.get(gridLocators.authorization.codeVerificationInput)
        .eq(1)
        .should('be.visible')
        .type(concoraApplicationsData[data].authorization.smsCodeVerificationInput.split('')[1])
    cy.get(gridLocators.authorization.codeVerificationInput)
        .eq(2)
        .should('be.visible')
        .type(concoraApplicationsData[data].authorization.smsCodeVerificationInput.split('')[2])
    cy.get(gridLocators.authorization.codeVerificationInput)
        .eq(3)
        .should('be.visible')
        .type(concoraApplicationsData[data].authorization.smsCodeVerificationInput.split('')[3])
    cy.get(gridLocators.authorization.codeVerificationInput)
        .eq(4)
        .should('be.visible')
        .type(concoraApplicationsData[data].authorization.smsCodeVerificationInput.split('')[4])
    cy.get(gridLocators.authorization.verifyButton).should('be.visible').click()

    cy.get(gridLocators.authorization.emailVerificationButton).should('be.visible').click()
    cy.get(gridLocators.authorization.emailVerificationButton).contains('Tap to Enter').click()
    cy.get(gridLocators.authorization.codeVerificationInput)
        .eq(0)
        .should('be.visible')
        .type(concoraApplicationsData[data].authorization.emailCodeVerificationInput.split('')[0])
    cy.get(gridLocators.authorization.codeVerificationInput)
        .eq(1)
        .should('be.visible')
        .type(concoraApplicationsData[data].authorization.emailCodeVerificationInput.split('')[1])
    cy.get(gridLocators.authorization.codeVerificationInput)
        .eq(2)
        .should('be.visible')
        .type(concoraApplicationsData[data].authorization.emailCodeVerificationInput.split('')[2])
    cy.get(gridLocators.authorization.codeVerificationInput)
        .eq(3)
        .should('be.visible')
        .type(concoraApplicationsData[data].authorization.emailCodeVerificationInput.split('')[3])
    cy.get(gridLocators.authorization.codeVerificationInput)
        .eq(4)
        .should('be.visible')
        .type(concoraApplicationsData[data].authorization.emailCodeVerificationInput.split('')[4])
    cy.get(gridLocators.authorization.verifyButton).should('be.visible').click()

    cy.get(gridLocators.authorization.agreementCheckbox).check().should('be.checked')

    cy.get(gridLocators.nextButton).should('be.visible').click()

    cy.get('h2').should('contain.text', 'Apologies')

    // // select offer
    // cy.get(gridLocators.offerSelection.plusButton).should('be.visible').click()
    // cy.get(gridLocators.offerSelection.offerRow).should('be.visible').click()
    // cy.get(gridLocators.nextButton).should('be.visible').click()

    // cy.get(gridLocators.nextButton).contains('View terms and conditions').click()

    // // agreements
    // cy.get(gridLocators.offerSelection.agreeConentTexts)
    //     .contains('Consent to Electronic Communications')
    //     .click()
    // cy.get(gridLocators.offerSelection.closeAgreementPopupButton).should('be.visible').click()
    // cy.get(gridLocators.offerSelection.agreeConentTexts)
    //     .contains('Application Authorization Disclosure')
    //     .click()
    // cy.get(gridLocators.offerSelection.closeAgreementPopupButton).should('be.visible').click()

    // cy.get(gridLocators.nextButton).should('be.visible').click()

    // cy.get('h2').should('have.text', 'Unfortunately, The Bank of Missouri is unable to approve your application for a Concora™ Credit Account.')
}

// export function createGridWithAPI(name, desc) {
//     // Create a post request to create a grid using API
//     cy.request({
//         method: 'POST',
//         url: 'https://www.bigparser.com/api/v2/grid/create_grid',
//         headers: {
//             Authorization: `Bearer ${localStorage.getItem('oAuth_user_access_token')}` // Extracted Bearer-Token from localStorage
//         },
//         body: { "gridName": name, "gridDescription": desc }
//     }).then(response => {
//         cy.log(JSON.stringify(response.body))
//     })
// }