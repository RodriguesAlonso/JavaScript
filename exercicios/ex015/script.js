function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = Number(txtano.value)    
    var res = document.querySelector('div#res')
    
    if (fano == 0){
        window.alert('ERRO preencha o campo do ano de nascimento')
        
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano        
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    } if(fsex[0].checked){
        genero = 'Homem'
        if (idade < 18){
            img.setAttribute('src', 'img/menino.png')
        }
        else if(idade < 65){
            img.setAttribute('src', 'img/adulto.png')
        }
        else{
            img.setAttribute('src', 'img/velho.png')
        }
    } else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade < 18){
            img.setAttribute('src', 'img/menina.png')
        }
        else if(idade < 65){
            img.setAttribute('src', 'img/adulta.png')
        }
        else{
            img.setAttribute('src', 'img/velha.png')
        }
    }
    
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.style.textAlign = 'center'
    res.appendChild(img)
    
       
    }