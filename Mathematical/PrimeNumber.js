function primeNumber(n){
    if(n<2){
        return false
    }
    for(let i=2; i<n;i++){
        if(n%i===0){
            return false
        }
    }
    return true
}

console.log(primeNumber(1))
console.log(primeNumber(5))
console.log(primeNumber(6))

{ /*
        remember-- in first if we should check n>2
        in 2nd if we should check n%i
*/}

//Big-O -> o(n)