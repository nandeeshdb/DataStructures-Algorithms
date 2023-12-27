function RecurssiveFactorial(n){
    if(n<2){
        return 1
    }
    return n*RecurssiveFactorial(n-1)
}

console.log(RecurssiveFactorial(2))

//Big -O -> O(n)