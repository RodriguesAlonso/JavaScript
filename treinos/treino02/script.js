function verificar(){
    var data = new Date()
    var agora = data.getFullYear()
    var anos = Number(ano.value)
    var idade = agora - anos
    var p1 = document.getElementsByTagName('p')[0]
    p1.innerHTML = (`Sua idade é de ${idade} anos`)
}