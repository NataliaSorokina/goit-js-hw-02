let input;
const numbers = [];
let total = 0;

do {
    input = prompt(`Введите число`);

    if (isNaN(input)) {
        alert(`Введённые данные не являются числом, текущая итерация пропускается`);
        continue;
    }
    else {
        numbers.push(input);
    }
} while (input !== null);

for (const number of numbers) {
    total += Number(number);
}
  
console.log(`Общая сумма чисел равна ${total}`);