/// <reference types="cypress" />

it('functions', function() {

    
    const helloWorld = () => "Curso Cypress"

    const somaValores = () => {
        return 1 + 2
    }
    
    function windowJs() {
        console.log(this)
    }

    const windowJsArrowFunction = () => {
        console.log(this)
    }

    console.log('function', windowJs())
    console.log('arrow function', windowJsArrowFunction())
    //console.log(helloWorld())
    //console.log(somaValores())
    

})

