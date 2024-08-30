export default {
  startApplicationButton: 'div.DigitCodePage__container-no-code button.DigitCodePage__gradient-btn',
  customerInfo: {
    personalInfo: {
      firstName: 'input#first_name',
      lastName: 'input#last_name',
      dateOfBirth: 'input#date_of_birth',
      addressInputDropdown: {
        dropdown: 'input#address-input',
        option: 'div[role="option"]'
      },
      zipCode: 'input#zip_code',
      rentCheckButton: 'div#property_status > label > span',
      ownCheckButton: 'span:contains(Own)'
    },
    drivingLiscenceInfo: {
      documentNumber: 'input#document_number',
      documentIssuenceDate: 'input#document_issuence_date',
      documentExpirationDate: 'input#document_expiration_date',
      documentIssuenceStateInputDropdown: {
        dropdown: 'input#document_issuence_state',
        option: 'div.ant-select-item-option'
      }
    }
  },
  nextButton: 'button[type="submit"]',
  productInfo: {
    financingTypeInputDropdown: {
      dropdown: 'input#financing_type',
      option: 'div.ant-select-item-option'
    },
    financingAmount: 'div.ant-form-item:nth-child(2) div.ant-input-number input',
    financingAmountConfirm: 'div.ant-form-item:nth-child(3) div.ant-input-number input',
  },
  incomeVerification: {
    annualIncome: 'div.ant-form-item:nth-child(1) div.ant-input-number input',
    employmentStatusDropdown: {
      dropdown: 'input#employment_status',
      option: 'div.ant-select-item-option'
    },
    companyName: 'input#company_name'
  },
  authorization: {
    phone: 'input#phone',
    email: 'input#email',
    ssn: 'form.AutorizationForm > div:nth-child(3) input',
    smsVerificationButton: 'div.varificationButton:nth-child(1) div.varificationButton__btn',
    // smsVerificationInputButton: 'div.varificationButton:nth-child(1) div.varificationButton__btn:contains(Tap To Enter)',
    emailVerificationButton: 'div.varificationButton:nth-child(2) div.varificationButton__btn',
    // emailVerificationInputButton: 'div.varificationButton:nth-child(2) div.varificationButton__btn:contains(Tap To Enter)',
    codeVerificationInput: 'div.code-input-container input',
    verifyButton: 'button.codeModal__gradient-btn',
    agreementCheckbox: 'input.ant-checkbox-input'
  },
  offerSelection: {
    plusButton: 'div.OfferItem__plus',
    offerRow: 'div.OfferItem__row',
    // submit offer
    // submit application
    // terms and condition
    // view terms and condition
    agreeConentTexts: 'a.SignContract__iframe-sub-text',
    closeAgreementPopupButton: 'button.ant-modal-close'
    // submit application
    // Consent to Electronic Communications
    // Application Authorization Disclosure
  }
};