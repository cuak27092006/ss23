let arr = [0, 1, false, 2, "", 3, null, "hello", undefined, NaN, "cua","khánh", 4];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i]) { 
        newArr.push(arr[i]);
    }
}

console.log(newArr); 

