/// <reference types="cypress" />

describe('Expects', function() {
    it('Equality == ', function() {
        let idadeMaiorque18anos = 18
 
        expect(idadeMaiorque18anos).to.be.equals(18)
        expect(idadeMaiorque18anos).equals(18)
        expect(idadeMaiorque18anos).eqls(18)

        expect(idadeMaiorque18anos).not.to.be.equals(17)
        expect(idadeMaiorque18anos).not.equals(17)
        expect(idadeMaiorque18anos).not.eqls(17)

        let nomes = ['Joao','Maria','Catarina','Bruno']
        expect(nomes[0]).equals('Joao').and.contains('Joao')

        // se a maria e igual a maria
        // se a catarina e igual a catarina
        // se o bruno e igual o bruno
    })
})
