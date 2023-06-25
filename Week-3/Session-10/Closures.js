function counter(){
    let count=0;
    return function add(){
        count++; return count;
    }
   // return add;
};

let firstData = [];
let first = counter();
for(let i=0;i<5;i++){
    firstData.push(first());
}

console.log(firstData);

let secondData = [];
let second = counter();
for(let i=0;i<2;i++){
    secondData.push(second());
}

console.log(secondData);

//Output
[ 1, 2, 3, 4, 5 ]
[ 1, 2 ]