const aprovados = ['Agatha','Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, i, a) {
    console.log(`${i}) ${nome}`)    
})

console.log('------------------')

aprovados.forEach((nome, i) => {
    console.log(`${i+1}) ${nome}`)
})

console.log('------------------')
const exibirAprovados = aprovados =>console.log(aprovados)
aprovados.forEach(exibirAprovados, i, a)

