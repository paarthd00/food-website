describe('Unit test lambda data', () => {
    it('Lambda returns data', () => {
        cy.request('http://localhost:8888/.netlify/functions/displayMenuItems').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.eq('[{"_id":"602b633a4407c3eb392d001b","name":"PATE POT","description":"chicken liver, butter","price":12}]')
        })
    })
})



