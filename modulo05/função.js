function paripmar(numero){
    if (numero % 2 == 0){
        return 'par'
    }
    else{
        return 'Ímpar'
    }
}

function soma(n1=1, n2=1){
    return n1 + n2
}

let m = function(x,y){
    return x * y
}

function fatorial(n){
    let fat = 1
    for (let c = n; c > 1; c--){
        fat *= c        
    }
    return fat
}
function fatorial2(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial2(n-1)
    }
}
console.log(fatorial2(5))


