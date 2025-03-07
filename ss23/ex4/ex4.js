let arr = [];
let n = +prompt("Nhập số phần tử của mảng: ");
while (isNaN(n)) {
    alert("Phải nhập số");
    n = +prompt("Nhập số phần tử của mảng: ");
}
for (let i = 0; i < n; i++) {
  let num = prompt(`Nhập phần tử thứ ${i + 1}: `);
  arr.push(num);
}
let count = 0;
for (let i = 0; i < arr.length - 1; i++) {
    if (!Number.isNaN(arr[i])) {
        console.log(arr[i]);
        count++;
    }
}
if (count === 0) {
    console.log("không có số");
}