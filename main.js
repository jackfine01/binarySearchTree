class Node {
    consturctor(data){
        this.data = data;
    }
};

class Tree {
    constructor(arr){
        this.array = arr;
    }
};

function mergeSort(arr){
    if(arr.length == 1){
        const baseArray = [arr[0]];
        return baseArray;
    }
    else{
        const mid = Math.ceil(arr.length / 2);
        const arrLeft = arr.slice(0, mid);
        const arrRight = arr.slice(mid);
        const subArrLeft = mergeSort(arrLeft);
        const subArrRight = mergeSort(arrRight);
        const subArr = [];
        while(subArrLeft.length > 0 && subArrRight.length > 0){
            if(subArrLeft[0]<subArrRight[0]){
                subArr.push(subArrLeft.shift())
            }
            else
                subArr.push(subArrRight.shift())
        }
        if(subArrLeft.length==0 && subArrRight.length>0){
            for(let i = 0; i<subArrRight.length; i++){
                subArr.push(subArrRight[i])
            }
        }
        else{
            for(let i = 0; i<subArrLeft.length; i++){
                subArr.push(subArrLeft[i])
            }
        }
        return subArr;
    };
}


function buildTree(arr){

};