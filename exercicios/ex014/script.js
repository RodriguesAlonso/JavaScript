function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()    
    var hora = data.getHours()    
    //msg.innerHTML = `Agora são ${hora} horas`     
    if(hora >= 5 && hora < 12){
        msg.innerHTML = 'Bom dia'
        img.src = 'img/manha_250.png'
    }
    else if (hora >= 12 && hora <= 18){
        msg.innerHTML = 'Boa tarde'
        img.src = 'img/tarde_250.png'

    }
    else{        
        msg.innerHTML = 'Boa noite'
        img.src = 'img/noite_250.png'
    }
}