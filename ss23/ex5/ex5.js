let arr = [];
let sum = 0;
let n = parseInt(prompt("Nhập số phần tử của mảng: "));

while (isNaN(n) || n <= 0) {
    n = parseInt(prompt("Vui lòng nhập số nguyên dương: "));
}

for (let i = 0; i < n; i++) {
    let value = prompt(`Nhập phần tử thứ ${i + 1}: `).trim();
    arr.push(value);

    let num = Number(value);
    if (!isNaN(num)) {
        sum += num;
    }
    
}

console.log(`Mảng vừa nhập: ${arr}`);
console.log(`Tổng các phần tử là số: ${sum}`);
