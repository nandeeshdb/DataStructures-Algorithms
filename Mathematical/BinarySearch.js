
// Problem Statement - Given an sorted array 'n' elements and a target element 't'
//                     Find the index of 't' in the array.
//                     Return -1 if the target element is not present in the array


//Important Note : Binary search only works on sorted array

function BinarySeacrh(array,target){
   
    let leftIndex = 0
    let rightIndex = array.length -1

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex+rightIndex)/2)

        if(target === array[middleIndex]){
            return middleIndex
        }
        if(target < array[middleIndex]){
            rightIndex = middleIndex-1
        }
        else{
            leftIndex = middleIndex +1
        }
    }

    return -1
 
}

console.log(BinarySeacrh([-1,3,4,6,7,12],6))



//Big-O -> O(logn)
