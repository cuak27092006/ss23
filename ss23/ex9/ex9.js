let arr = [];

while (true) {
    let choice = parseInt(prompt(

        "================== MENU ===================\n" +
        "1. Nhập số phần tử cần nhập và giá trị các phần tử\n" +
        "2. In ra giá trị các phần tử đang quản lý\n" +
        "3. In ra giá trị các phần tử chẵn và tính tổng\n" +
        "4. In ra giá trị lớn nhất và nhỏ nhất trong mảng\n" +
        "5. In ra các phần tử là số nguyên tố trong mảng và tính tổng\n" +
        "6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó\n" +
        "7. Thêm một phần tử vào vị trí chỉ định\n" +
        "8. Thoát\n" +
        "============================================\n" +
        "Lựa chọn của bạn: "
    ));

    switch (choice) {
        case 1:
            let n = parseInt(prompt("Nhập số phần tử: "));
            arr = [];
            for (let i = 0; i < n; i++) {
                arr.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}: `)));
            }
            alert(`Các phần tử đã nhập: ${arr}`);
            break;

        case 2:
            alert(`Các phần tử trong mảng: ${arr}`);
            break;

        case 3:
            let evenNumbers = [];
            let evenSum = 0;
            for (let num of arr) {
                if (num % 2 === 0) {
                    evenNumbers.push(num);
                    evenSum += num;
                }
            }
            alert("Các số chẵn: " + evenNumbers+ " | Tổng: " + evenSum);
            break;

        case 4:
            if (arr.length === 0) {
                alert("Mảng rỗng!");
            } else {
                alert("Giá trị lớn nhất: " + Math.max(...arr) + "\nGiá trị nhỏ nhất: " + Math.min(...arr));
            }
            break;

        case 5:
            let isPrime = num => {
                if (num < 2) return false;
                for (let i = 2; i <= Math.sqrt(num); i++) {
                    if (num % i === 0) return false;
                }
                return true;
            };
            
            let primeNumbers = [];
            let primeSum = 0;
            
            for (let num of arr) {
                if (isPrime(num)) {
                    primeNumbers.push(num);
                    primeSum += num;
                }
            }
            
            alert("Các số nguyên tố: " + primeNumbers + " | Tổng: " + primeSum);
            break;

        case 6:
            let x = parseInt(prompt("Nhập số cần tìm: "));
            let count = 0;
            for (let num of arr) {
                if (num === x) {
                    count++;
                }
            }
            alert(`Số ${x} xuất hiện ${count} lần trong mảng.`);
            break;

        case 7:
            let value = parseInt(prompt("Nhập giá trị cần thêm: "));
            let position = parseInt(prompt("Nhập vị trí cần thêm : "));
            if (position < 0 || position > arr.length) {
                alert("Vị trí không hợp lệ!");
            } else {
                arr.splice(position, 0, value);
                alert("Mảng sau khi thêm: " + arr);
            }
            break;

        case 8:
            alert("Thoát chương trình!");
            break;

        default:
            alert("Lựa chọn không hợp lệ!");
    }

    if (choice === 8) break;
}
