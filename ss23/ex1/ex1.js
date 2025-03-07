let numbers = [];
let count = 0;
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Nhập số nguyên thứ  ${i + 1}:`), 10);
    numbers.push(num);
}
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 10) {
        count++;
    }
}
console.log(`Có ${count} số nguyên lớn hơn hoặc bằng 10 trong mảng.`);





