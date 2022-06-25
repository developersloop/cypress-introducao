/// <reference types='cypress' />
/// Validar se valor é true
/// Validar se valor é false

describe('Validando Valores expects', function () {

    let itstrue = true

    it('Valores True', function(){
    
        expect(itstrue).eql(true)
        expect(itstrue).to.be.equal(true)
        expect(itstrue).equals(true)
        
        expect(itstrue).not.to.equal(false)
        expect(itstrue).not.equal(false)
    
    })
    
    // Validando Strings

    it('Validando String', function(){
        let name = "Vanilson"
        expect(name).to.be.equal('Vanilson')
        expect(name).eql('Vanilson')
        expect(name).eql('Vanilson')
        expect(name).equal('Vanilson')
        expect(name).not.to.equal('Barack Obama')
        expect(name).not.equal('Barack Obama')
        expect(name).equal('Vanilson').and.not.equal('Barack  Obama')
        expect(name.length).to.equal(8)

    })
    
    it('Validando Array', function () {
        let names = ['Joao','Maria','Catarina','Bruno']
        expect(names[0]).to.equal('Joao')
        expect(names[1]).to.equal('Maria')
        expect(names[2]).to.equal('Catarina')
        expect(names[3]).to.equal('Bruno')

        expect(names[3]).not.to.equal('Joao')
        expect(names[2]).not.to.equal('Maria')
        expect(names[1]).not.to.equal('Catarina')
        expect(names[0]).not.to.equal('Bruno')
        expect(names[0]).contains('J')
        expect(names[1]).contains('a')



        
    })
})