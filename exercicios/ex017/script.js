function gerar(){
    var nun = Number(numero.value)
    var tabuada = document.getElementById('tab')
    
    if (nun == 0) {
        window.alert('Porfavor digite um número')        
    }else{        
        let n = nun
        tabuada.innerHTML = ''
        for (var c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`
            item.value = `tabuada${c}`
            tabuada.appendChild(item)            

       }
    }
    
}