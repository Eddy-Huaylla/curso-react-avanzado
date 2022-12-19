describe( 'Petgram', function () {
	it('para ver si funciona', function () {
		cy.visit('/');
	})

	it('navegamos a una categoria y vemos fotos', function() {
		cy.visit('/pet/1')
		cy.get('article')
	});

	it('si podemos navegar con la navbar a la home',  function() {
		cy.visit('/pet/1')
		cy.get('nav a').first().click
		cy.url().should('include', '/')
	})

	it('los usuarios no registrados ven el formulario de registro e inicio de sesion al ir a favs', function() {
		cy.visit('/favs')
		cy.get('form').should('have.length', 2)
	})

	it('verifica si el link lleva al Home es la url base', function () {
		cy.visit('/pet/1')
		cy.get('nav a').first().click()
		cy.url().should('eq', Cypress.config().baseUrl )
	} )
})
