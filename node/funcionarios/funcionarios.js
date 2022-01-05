const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') //client http, faz requicisoes

const chineses = f => f.pais === 'China' //Filtro de chineses
const mulheres = f => f.genero === 'F' //Filtra mulheres
const menorSalario = (func, funcAtual) =>{
    return func.salario < funcAtual.salario ? func : funcAtual
}//pegar menor salario

axios.get(url).then(response =>{
    const funcionarios = response.data
    //console.log(funcionarios)

//*  Mulher chinesa com menor salario 
const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

console.log(func)
})