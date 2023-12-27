function Fibanocci(n){
    const fib = [0,1]
    for(let i =2; i<n; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    console.log(fib)
}

Fibanocci(7) 

//Big-O -> o(n)