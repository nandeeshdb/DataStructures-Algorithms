function recursiveBinarySearch(arr,target){
    return seacrh(arr,target,0,arr.length-1)
}

function seacrh(arr,target,leftIndex,rightIndex){
        if(leftIndex > rightIndex){
            return 1
        }

        let middleIndex = Math.floor((leftIndex+rightIndex)/2)
        if(target === arr[middleIndex]){
            return middleIndex
        }

        if(target<arr[middleIndex]){
            return seacrh(arr, target,leftIndex,middleIndex-1 )
        }
        else{
            return seacrh(arr,target,middleIndex+1,rightIndex)
        }
}


console.log(recursiveBinarySearch([1,3,4,6,9,11],4))

//Big-O -> O(logn)