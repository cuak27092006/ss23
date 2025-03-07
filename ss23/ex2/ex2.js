let arr = [];
for (let i = 0; i < 10; i++) {
  let num = +prompt(`Nhập phần tử thứ ${i + 1}: `);
  if (isNaN(num)) {
    alert("Phải nhập số");
    i--;
    continue;
  }
  arr.push(num);
}
let max = Math.max(...arr);
console.log("Phần tử lớn nhất trong mảng:", max);
console.log("Vị trí của phần tử lớn nhất trong mảng:", arr.indexOf(max) + 1);