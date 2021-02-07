let nun = document.querySelector('input#txt1')
let tab = document.getElementById('dados')
let list = []
let res = document.querySelector('div#res')


function adicionar(){        
    if(nun < 0 || nun > 100 || nun == 0 || nun.value.length == 0 || list.indexOf(Number(nun.value)) != -1 ){
        window.alert('Digite um número entre 1 e 100 não repetido')
    }else{
        res.innerHTML = ''                
        list.push(Number(nun.value))
        let item = document.createElement('option')
        item.text = `Valor ${nun.value} adicionado.`
        tab.appendChild(item)
        res.innerHTML =''        
    }
    nun.value= ''
    nun.focus()
    return list
}
function finalizar(){
    if(list.length == 0){
        window.alert('Adicione valores')
    }else{
    let total = list.length
    list.sort()
    let maior = list[total - 1]
    let menor = list[0]
    let soma =  0
    for(let c = 0; c < total; c++){
        soma += list[c]
    }
    let media = soma / total
    res.innerHTML = `<p>A lista possui ${total} valores </p> <p>O maior valor é ${maior}</p> <p>O menor valor é ${menor}</p> <p>A soma dos valores é ${soma}</p> <p>A média dos valores é ${media}</p>`
    }    
}