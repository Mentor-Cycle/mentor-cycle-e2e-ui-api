describe('Login', () => {
  it('Realizando login com sucesso', () => {
    cy.visit('/')

    cy.get('input[name="email"]').type('ti.gscode+mentorado@gmail.com')
    cy.get('input[name="password"]').type('#Pwd1234')
    cy.contains('button', 'Entrar').click()
  })
})
