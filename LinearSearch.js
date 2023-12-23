{/*
Problem Statement - Given an array 'n' elements and a target element 't'
                    Find the index of 't' in the array.
                    Return -1 if the target element is not present in the array
*/}

function LinearSearch(arr,target){
    for(let i= 0; i<arr.length; i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1
}

console.log(LinearSearch([1,2,4,6,7,8,11],6))

//Big-O -> O(n)

