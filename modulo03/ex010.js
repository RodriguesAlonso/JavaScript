/*var idade = 18
    if (idade >= 18){
        console.log('voto obrigatório')
    }else if(idade >=16 ){
        console.log('voto facultativo')
    }else{
        console.log('não pode votar')
    }
    
   var agora = new Date()
   console.log(agora)
   var hora = agora.getHours()
   console.log(hora)
   */

   var agora = new Date()
   var diasem = agora.getDay()
   
   switch(diasem){
       case 0:
           console.log('domingo')
           break
       
       case 1:
           console.log('segunda-feira')
           break

       
       case 2:
           console.log('terça-feira')
           break

       
       case 3:
           console.log('quarta-feira')
           break

       
       case 4:
           console.log('quinta-feira')
           break
           
       
       case 5:
           console.log('sexta-feira')
           break

       
       case 6:
           console.log('sabado')
           break

       
   }