function verificar(){

    var data = new Date()
    var agora = data.getFullYear()
    var anos = Number(ano.value)        
    var res = document.querySelector('div#res')        
         
    if (anos == 0 || anos > 2021){
        window.alert('preencha o campo Ano de nascimento com um ano válida')   
         
    } else{
        var idade = agora - anos
        var fsex = document.getElementsByName('sexo')        
        var genero = ''
        var img = document.createElement('img')        
        img.setAttribute('id', 'foto')
    }if(fsex[0].checked){
        genero = 'Homem'        
        if( idade <  18){            
            img.setAttribute('src', 'img/menino.jpg')
        }else{
            img.setAttribute('src', 'img/adulto.jpg')
        }             
            
        
        }else if(fsex[1].checked){
            genero = 'Mulher'
        if(idade < 18){
            img.setAttribute('src', 'img/menina.jpg')
        }else{
            img.setAttribute('src', 'img/adulta.jpg')
        }

        
        }       
        
        
    
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`        
        res.style.textAlign = 'center'
        res.appendChild(img)    
}



