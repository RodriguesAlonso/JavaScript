function carregar(){
    var tempo = Number(hora.value)
    var teste = window.document.getElementById('teste')
    var img1 = window.document.getElementById('foto')
    teste.innerHTML = tempo
    if (tempo > 18 || tempo < 6){  
        window.document.body.style.backgroundColor = '#eee1d1'
        img1.src = 'img/manha_250.png'   
        
    }
    else if (tempo >= 6 tempo <= 12){        
        window.document.body.style.backgroundColor = '#cc795e'
        img1.src = 'img/tarde_250.png'        
    }
    else{        
        window.document.body.style.backgroundColor = '#508dba'
        img1.src = 'img/noite_250.png'
    }
    
}


