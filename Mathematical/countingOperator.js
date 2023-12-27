
//code-1
{/* always it takes only 3 operation, no matter how big is n and it is more efficient */}

// o(3)
const sumUpto1 =n=>{
    return (n*(n+1))/2
}
const res1 = sumUpto1(4)
console.log(res1)



//code-2
{/* Takes 1*n operations .. and it is not efficient */}
//o(n)
const sumUpto2 = n=>{
    let t=0;
    for(let i=0; i<= n; i++){
        t+=i;
    }
    return t
}

const res2 = sumUpto2(3)
console.log(res2)

