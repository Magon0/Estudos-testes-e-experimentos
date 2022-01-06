/** 
setTimeout(function(){ //callbackHell
    console.log('Executando Callbak')

    setTimeout(function(){
        console.log('Executando Callbak')

        setTimeout(function(){
            console.log('Executando Callbak')
        },2000)
    },2000)
},2000)
*/
function esperarPor(tempo = 2000){
return new Promise(function(resolve){
    setTimeout(function(){
        console.log('Executando Promisse')
        resolve()
    },tempo)
})
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)