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
    for (let c = n; c < n; c--){
        fat *= c        
    }
    return fat
}
console.log(fatorial(5))

