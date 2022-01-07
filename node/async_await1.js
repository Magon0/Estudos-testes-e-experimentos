function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(()=>resolve(), tempo)
    })
}

//sincromatico, todos executam ao mesmo tempo
/**
esperarPor(2000)
    .then(()=> console.log('Executar promise1...'))
    .then(esperarPor) // promise executada dps de x tempo
    .then(()=> console.log('Executar promise2...'))
    .then(esperarPor)
    .then(()=> console.log('Executar promise3...'))
 */

function retornarValor(){
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar(){
    
    let valor = await retornarValor()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor+1}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor+2}...`)

    return valor + 3
}

executar().then(console.log)