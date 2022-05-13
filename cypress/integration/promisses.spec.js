it('promisses', function() {

    function PrometoDarAAna23reais() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(23)
            }, 10000)
        })
    }

    console.log('Meu nome é vitor')
    
    PrometoDarAAna23reais()
        .then(dinheiro => {
            console.log('Cumpri minha promessa, e esta aqui Ana seus  '+ dinheiro + 'R$ 23,00 reais')
        })

    console.log('sou mineiro')
})