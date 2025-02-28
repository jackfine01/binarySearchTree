//PsuedoCode:
        // declare current Node/Tree as root of tree:
            //let current = this.root, we are in the tree already.
        //"recurse" down the subtree;
        // exit case: the next Node we are traveling too is null
            //exit case (if newNode.value < current.data && node.left == null)  --> current.left = newNode;
            //exit case (if newNode.value > current.data && node.right == null) --> current.right = newNode;
        // recursive case: if (newNode.value < current.data && node.left != null) --> current = current.left, current.insert(value);
        // recursive case: if (newNode.value > current.data && node.right != null) --> current = current.right, current.insert(value);

class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right=  null;
    }
};

class Tree {
    constructor(arr){
        this.arr = mergeSort(arr);
        this.arr =  removeDupes(this.arr);
        this.end = this.arr.length
        this.root = buildTree(this.arr, 0, this.end-1);
    }


    insert(value){
        let current = this.root

        while(current.data !== value){
            if(value < current.data){
                if(current.left == null)
                    current.left = new Node(value);
                else{
                    if(current.left != null)
                        current = current.left;
                }
            }
    
            if(value > current.data){
                if(current.right == null)
                    current.right = new Node(value);
                else{
                    if(current.right != null)
                        current = current.right;
                }
            }
        }  
    }

    deleteItem(value){

    }
    find(value){

    }
    levelOrder(callback){

    }
    inOrder(callback){

    }
    preOrder(){

    }
    postOrder(){

    }
    height(){

    }
    depth(){

    }
    isBalanced(){

    }
    rebalance(){

    }
};

function mergeSort(arr){
    if(arr.length == 1){
        const baseArray = [arr[0]];
        return baseArray;
    }
    else{
        const mid = Math.floor(arr.length / 2);
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
    const middle = Math.floor((start+end)/2)
    const root = new Node(arr[middle])

    root.left = buildTree(arr, start , middle-1)
    root.right = buildTree(arr, middle+1 , end)
    return root;
};

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
 

let testArr = [10, 40, 30, 20, 80, 90, 40, 30, 50, 70, 60, 10, 10, 10, 10, 20,20,20,30,30,30];
const testTree = new Tree(testArr)
prettyPrint(testTree.root)
testTree.insert(65);
testTree.insert(71);
testTree.insert(65);
testTree.insert(61);
testTree.insert(35);
testTree.insert(25);
testTree.insert(45);
testTree.insert(50);
prettyPrint(testTree.root)
