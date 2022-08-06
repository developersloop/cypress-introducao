/// <reference types="cypress" />

describe('Expects', function() {
    it.skip('Equality == ', function() {
        let idadeMaiorque18anos = 18

        expect(idadeMaiorque18anos).to.be.equals(18)
        expect(idadeMaiorque18anos).equals(18)
        expect(idadeMaiorque18anos).eqls(18)

        expect(idadeMaiorque18anos).not.to.be.equals(17)
        expect(idadeMaiorque18anos).not.equals(17)
        expect(idadeMaiorque18anos).not.eqls(17)

        let nomes = ['Joao','Maria','Catarina','Bruno']
        expect(nomes[0]).equals('Joao').and.contains('J')

        // se a maria e igual a maria
        // se a catarina e igual a catarina
        // se o bruno e igual o bruno
    })

    it.skip('Truthy', function() {
        const a = true
        const l = false
        const b = null
        let c = undefined
        let name = 'Vanilson'

        expect(a).to.be.true
        expect(l).to.be.false
        expect(b).to.be.null
        expect(c).to.be.undefined
    })

    it.skip('Object equlity', function() {
        const objeto = {
            name: 'Vitor',
            lastname: 'Vicente'
        }

        const objeto1 = {}
        expect(objeto).equal(objeto)
        expect(objeto).to.be.deep.equal({
            name: 'Vitor',
            lastname: 'Vicente'
        })

        expect(objeto).include({name: 'Vitor'})
        expect(objeto).include({ lastname: 'Vicente'})

        expect(objeto).to.have.property('name')
        expect(objeto).to.have.property('name', 'Vitor')
        expect(objeto).to.have.property('name').and.to.be.not.null

        expect(objeto1).to.be.empty
        expect(objeto).not.to.be.empty
    })

    it.skip('Array equality', function() {
        const str = [1,2,3]
        const str1 = []

        expect(str).to.have.members([1,2,3])
        expect(str).to.be.not.empty
        expect(str1).to.be.empty
    })

    it.skip('Types', function() {
        var nome = 'Vitor'
        var age = 23
        var isMarried = true

        var payload = {}
        var students = []

        // .a e um caractere de comparação
        expect(nome).to.be.a('String')
        expect(age).to.be.a('number')
        expect(isMarried).to.be.a('Boolean')
        expect(payload).to.be.a('Object')
        expect(students).to.be.a('Array')
    })

    it.only('Numbers', function() {
        const number = 4
        const pi = 3.14

        expect(number).to.eqls(4)
        expect(number).to.be.above(2) // se number é menor que < 4 
        expect(number).to.be.below(5) // se number é maior que > 4 
        
        expect(pi).to.be.above(2)
        expect(pi).below(3.15)
    })
})
