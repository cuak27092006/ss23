let arr = [];
let n = +prompt("Nhập số phần tử của mảng: ");
while (isNaN(n)) {
    alert("Phải nhập số");
    n = +prompt("Nhập số phần tử của mảng: ");
}
for (let i = 0; i < n; i++) {
  let num = +prompt(`Nhập phần tử thứ ${i + 1}: `);
  if (isNaN(num)) {
    alert("Phải nhập số");
    i--;
    continue;
  }
  arr.push(num);
}
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0 && Number.isInteger(arr[i])) {
    count++;
  }
}
if (count === 0) {
    console.log("Mảng không có phần tử");
} else {
    console.log(count);
}