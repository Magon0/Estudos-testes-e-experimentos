function gerarNumerosEntre(min, max, tempo){
    if(min>max){
        [max, min] = [min, max] //invertendo valores com destrution no array
    }
    return new Promise(resolve =>{
        const fator = (max - min +1)
        const aleatorio = parseInt(Math.random() *fator)+min
        resolve(aleatorio)
    }, tempo)
}


function gerarVariosNumeros(){
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 15000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 4000)
    ])
}

gerarVariosNumeros()
    .then(numeros => console.log(numeros))
    