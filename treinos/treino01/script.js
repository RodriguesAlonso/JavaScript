function carregar(){
    var lbl1 = document.getElementsByTagName('label')[0]
    var agora = new Date()  
    var  hora = agora.getHours()
    //hora = 9
    var img = document.querySelector('img#foto')
    lbl1.innerText = hora
    if (hora < 12){
        //manhã
        img.src = 'img/manha.jpg'       
        
    }
    else if (hora < 16){
        //tarde
        img.src = 'img/tarde.jpg'

    }else{
        //noite
        img.src = 'img/noite.jpg'
    }
}