const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto']= 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro ={
    modelo: 'A4',
    valor: 89000,
    proprietario:{
        nome: "Raul",
        idade: 56,
        endereco:{
            longradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores:[{
        nome:'Junior',
        idade: 19
    },{
        nome:'Ana',
        idade: 42
    }],
    calcularValorSegunro: function(){
        //...Faz algo
    }
}
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['longradouro'] = 'Av Gigante'
console.log(carro)

//delete carro.consutores
delete carro.proprietario.endereco
delete carro.calcularValorSegunro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)