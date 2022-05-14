/// <reference types="cypress"/>

describe ("Espects", function(){

    it ("Equality", function(){
        let idadeMaiorque18anos =18 

        expect(idadeMaiorque18anos).to.be.equals(18)
        expect(idadeMaiorque18anos).equals(18)
        expect(idadeMaiorque18anos).eqls(18)

        expect(idadeMaiorque18anos).not.to.be.equals(17)
        expect(idadeMaiorque18anos).not.equals(17)
        expect(idadeMaiorque18anos).not.eqls(17)

        let nomes = ['', 'Maria', 'Catarina', 'Bruno']
        expect (nomes [0]).not.equals('Joao')
        expect (nomes [1]).equals('Maria')
        expect (nomes [2]).equals('Catarina')
        expect (nomes [3]).equals('Bruno')


    })

        
  



})    


