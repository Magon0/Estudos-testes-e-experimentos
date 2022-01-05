
tratarErroELancar(erro){
    throw new Error('...')
}
function imprimirNomaMaiusculo(obj){
    try{
        console.log(obj.name.toUpperCase()+'!!!!')
    }
    catch(e){
        tratarErroELancar(e)
    }
    
}
const obj = {nome: 'Roberto'}
imprimirNomaMaiusculo(obj)