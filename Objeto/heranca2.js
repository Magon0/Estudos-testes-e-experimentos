//Cadeira de prototipos (prototype chain)

const avo = {Attr1:'A'}
const pai ={__proto__:avo, Attr2:'B', Attr3:'3'}
const filho ={__proto__:pai, Attr3:'C'}
console.log(filho.Attr1, filho.Attr2, filho.Attr3) //herando atributos 


const carro= {
    velAtual: 0,
    velMax:200, 
    aceleraMais(delta){
        if(this.velAtual+delta <= this.velMax){
            this.velAtual+=delta
        }
        else{
            this.velAtual=this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari ={
    modelo: 'F40',
    velMax: 324 //shadowing
}

const volvo ={
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)//ferrari herda de carro
Object.setPrototypeOf(volvo, carro) //volvo herda de carro

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())