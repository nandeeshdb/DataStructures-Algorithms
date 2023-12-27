function bubbleSort(arr){

    let swapped
    do{
        swapped=false;
        for(i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
            let temp =arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            swapped=true
            }
        }
    }while(swapped)

}

const arr=[1,4,2,6,-1,3]
bubbleSort(arr)
console.log(arr)

//big-O -> O(n^2)