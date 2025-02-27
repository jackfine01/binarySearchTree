class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right=  null;
    }
};

class Tree {
    constructor(arr){
        this.array = arr;
        this.root = buildTree(arr, 0, arr[arr.length-1]);
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

function removeDupes(arr){
    let dupelessArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i]!=arr[i+1])
            dupelessArr.push(arr[i]);
    };
    return dupelessArr;
};

function buildTree(arr, start, end){

    if(start>end) return null;
    const middle = Math.floor( (start+end)/2)
    const root = new Node(arr[middle])

    root.left = buildTree(arr, start , middle-1)
    root.right = buildTree(arr, middle+1 , end)
    console.log(root.right)
    return root;
};

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null||node.data === undefined) {
      return;
    }
    if (node.right !== null||node.right!==undefined) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null||node.right!==undefined) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
 

// let testArr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let testArr = [1,2,3,4,5,6,7,8,9]
testArr = mergeSort(testArr);
testArr = removeDupes(testArr);
// console.log(testArr.length-1)
// console.log(testArr[testArr.length-1])
// buildTree(testArr, 0, testArr.length-1)
const testTree = new Tree(testArr)
prettyPrint(testTree.root)
