function contar(){    
    var ini = Number(ni.value)
    var fim = Number(nf.value)
    var pas = Number(np.value)
    var res = document.querySelector('div#res')         
    if (ini == 0 || fim  == 0 || pas == 0){
        window.alert('ERRO preencha todos os campos')
    } else {
        res.innerHTML = 'INÍCIO '
        if(pas <= 0){
            window.alert('Valor do Passo inválido, passo = 1')
            pas = 1
        }
        if(ini < fim){
            for (var c = ini; c < fim; c += pas){
                res.innerHTML += `${c}, `       
            }        
            }else{
              for (var c = ini; c > fim; c -= pas){
              res.innerHTML += `${c}, `
            }
          }
    }
    res.innerHTML += ' FIM'
}