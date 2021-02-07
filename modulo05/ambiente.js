let nun = [1,43,15,10]
console.log(`tete01 criar array ${nun}`)

nun[4] = 22
console.log(`teste02 adicionar elemento ${nun}`)

nun.push(55)
console.log(`teste03 adicionar elemente com a função push ${nun}`)

let tamanho = nun.length
console.log(`teste04 tamanho de nun com o atributo length é ${tamanho}`)

nun.sort()
console.log(`função sort ${nun}`)

for(var x = 0; x < nun.length; x++){
    console.log(`valor ${x} = ${nun[x]}`)

}

for(x in nun){
    console.log(`x in nun ${x} = ${nun[x]}`)
}

console.log(`comando indexOf para achar a chave de 43 ${nun.indexOf(43)}`)
console.log(`comando indexOf para achar a chave de 433 ${nun.indexOf(433)} não existe`)