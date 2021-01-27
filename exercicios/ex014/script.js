function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()        
    var hora = data.getHours()    
    //msg.innerHTML = `Agora são ${hora} horas`     
    if(hora >= 5 && hora < 12){
        msg.innerHTML = `Agora são ${hora} horas`
        img.src = 'img/manha_250.png'
        window.document.body.style.backgroundColor = '#eee1d1' 
    }
    else if (hora >= 12 && hora <= 18){
        msg.innerHTML = `Agora são ${hora} horas`
        img.src = 'img/tarde_250.png'
        window.document.body.style.backgroundColor = '#cc795e'

    }
    else{        
        msg.innerHTML = `Agora são ${hora} horas`
        img.src = 'img/noite_250.png'
        window.document.body.style.backgroundColor = '#508dba'
    }
}