const sequencia ={
    _valor: 1, //convenção que eh uma variavel interna 
    get valor(){return this._valor++}, //let e add +1
    set valor (valor){ //seta valor 
        if(valor>this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor=10
console.log(sequencia.valor)
console.log(sequencia.valor)
