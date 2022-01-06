let p = new Promise(function(cumprirPromessa){ //callback
    cumprirPromessa(['Ana','Bia','Carlos','Daniel'])//lista de array que será enviado para os then da promise
})
const PrimeiroElement = array => array[0] //arrow function com uma linha


const primeiraLetra = string =>{ //arrow function
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

//executando as promises
p
    .then(PrimeiroElemento) //retorna primeiro elemento do array
    .then(primeiraLetra) //retornar primeira letra do elemento string
    .then(letraMinuscula) //transforma a letra em minuscula
    .then(console.log) //passa o proprio parametro 