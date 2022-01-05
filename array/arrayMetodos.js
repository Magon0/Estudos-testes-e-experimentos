const pilotos = ['Vettel', 'Alonso', 'Raikkone', 'Massa']
console.log(pilotos)

pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos) //add o ultimo elento do array

pilotos.shift()//remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')//add o primeiro
console.log(pilotos)

//splice add e remove elementos no array

//add
pilotos.splice(2,0, 'Bottas', 'Massa') //add no indice 2 e remove 0 elementos
console.log(pilotos)

//remover
pilotos.splice(3,1) //remover no indice 3, 1 elemento
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) //novo array apartir do indice 2
console.log(algunsPilotos)


const algunsPilotos2 = pilotos.slice(1, 4) //de 1 ate 4(4 n entra)
console.log(algunsPilotos2)
