console.log("Hello from inside the main.js file");

//let myVar;

const myVar = "dasen";
const myVarType = typeof(myVar);
console.log("myVarType" + myVarType);
console.log('myVarType ${myVarType}');

if(myVarType === "number") {
    console.log('will 11 this line will run')
} else {
    console.log('this line will not run')
}

function runNow () {
    if(myVarType === "number") {
        console.log('will 11 this line will run');
    } else {
        console.log('this line will not run');
    }
}

runNow();
runNow();
