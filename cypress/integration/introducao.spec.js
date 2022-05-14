/// <reference types="cypress" />

// import  resultado from "./soma.spec"

import {soma, sub, div, mult} from './soma.spec'

it('functions', function() {

    
    const helloWorld = () => "Curso Cypress"

    const somaValores = () => {
        const estudarOque = () => "Cypress Pessoal"
        return estudarOque()
        
    }
     console.log(somaValores())

    function windowJs() {
        console.log(this)
    }

    const windowJsArrowFunction = () => {
        console.log(this)
    }

    console.log('function', windowJs())
    console.log('arrow function', windowJsArrowFunction())
    console.log('O resultado da soma é: ' + soma)
    console.log('O resultado da subtração é: ' + sub)
    console.log('O resultado da divisão é: ' + Math.round(div))
    console.log('O resultado da multiplicação é: ' + mult)

    //console.log(helloWorld())
    //console.log(somaValores())
    //console.log(estudarOque())
    
   

})

