function ReccursiveFibnocci(n){
    if(n<2){
        return n
    }
     return ReccursiveFibnocci(n-1)+ReccursiveFibnocci(n-2)
}

console.log(ReccursiveFibnocci(6))

//BIG-O -> O(2^n) -> beacuse of this reccursive is not good on fibbanocci number
