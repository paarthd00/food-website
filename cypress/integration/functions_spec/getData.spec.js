
let data = ''
describe('Unit test lambda data', () => {
    it('Lambda returns data', () => {
        cy.request('http://localhost:8888/.netlify/functions/displayMenuItems').then((response) => {
            JSON.parse(response.body).forEach(element => {
                cy.log(element.name)
            });
        })
    })
})



