require('cypress-xpath')
describe('Drag and Drop Slider', () => {

    it.only('displays two todo items by default', () => {

        cy.visit("https://www.lambdatest.com/selenium-playground/")
        cy.wait(5000)
        cy.xpath("//*[text()[normalize-space()='Drag & Drop Sliders']]").click()

    })

    it('can add new todo items', () => {
        const newItem = 'Feed the cat'
        cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)
        cy.get('.todo-list li')
            .should('have.length', 3)
            .last()
            .should('have.text', newItem)
    })
})