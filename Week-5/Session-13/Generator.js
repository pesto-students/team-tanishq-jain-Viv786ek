
const arr = ['hello', 'world','test'];

function* gen(){
    yield* arr;
}

for(let value of gen()){
console.log(Symbol(value));
}