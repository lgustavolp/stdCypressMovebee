import React from 'react'
import ZipFinder from './ZipFinder'

describe('<ZipFinder />', () => {

  beforeEach(() => {
    cy.mount(<ZipFinder />)

    cy.viewport(1200, 768)

    cy.get('[data-cy=inputCep]').as('inputCep')
    cy.get('[data-cy=submitCep]').as('submitCep')
  })

  it('should find a zip code in the cover area', () => {

    const address = {
      street: 'Rua Tutóia',
      district: 'Vila Mariana',
      city_State: 'São Paulo/SP',
      zipcode: '04007-900'
    }

    cy.zipFind(address, true)

    cy.get('[data-cy=street]')
      .should('have.text', address.street)

    cy.get('[data-cy=district]')
      .should('have.text', address.district)

    cy.get('[data-cy=city_State]')
      .should('have.text', address.city_State)

    cy.get('[data-cy=zipcode]')
      .should('have.text', address.zipcode)

  })

  it('zipcode should be required', () => {

    cy.get('@submitCep').click()

    cy.get('#swal2-title')
      .should('have.text', 'Preencha algum CEP')

    cy.get('.swal2-confirm').click()

  })

  it('ZipCode Invalid', () => {

    const address = { zipcode: '000000000' }
    
    cy.zipFind(address)

    cy.get('[data-cy="notice"]')
      .should('be.visible')
      .should('have.text', 'CEP no formato inválido.')

  })

  it('ZipCode Outside covered area', () => {

    const zipcode = '00000000'

    cy.get('@inputCep').type(zipcode)
    cy.get('@submitCep').click()

    cy.get('[data-cy="notice"]')
      .should('be.visible')
      .should('have.text', 'No momento não atendemos essa região.')

  })

})

Cypress.Commands.add('zipFind', (address, mock = false) => {

  if (mock) {
    cy.intercept('GET', '/zipcode/*', {
      statusCode: 200,
      body: {
        cep: address.zipcode,
        logradouro: address.street,
        cidade_uf: address.city_State,
        bairro: address.district
      }
    }).as('getZipCode')
  }

  cy.get('@inputCep').type(address.zipcode)
  cy.get('@submitCep').click()

  if (mock) {
    cy.wait('@getZipCode')
  }

})