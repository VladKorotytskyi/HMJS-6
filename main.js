//1. Вивести в консоль всі числа від 1 до 10 за допомогою циклу while. 

// let counter = 1;
// while (counter < 11) {
//     console.log(counter);
//     counter += 1;
// }

//2. Вивести в консоль всі парні числа від 2 до 20 за допомогою циклу for. Якщо число парне, пропустити його за допомогою continue. 

// const number = 22;
// for(let i = 2; i < number; i++) {
//     if(i % 2 === 1) {
//         continue;
//     }
//     console.log(i)
// }

//3. Вивести в консоль таблицю множення числа 7 за допомогою циклу for. 

// const a = 7;
// const b = 11;
// let result = 0;

// for(let i = 0; i < b; i++) {
//     console.table(a * i);
// }

//4. Створити скрипт, який виводить в консоль всі числа , які менші за n. 
//Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.    

// const n = 10;
// for(let i = 0; i < n; i++) {
//     if(i >= n) {
//         break;
//     }
//     console.log(i);
// }

//5. За допомогою циклу while вивести в консоль всі числа від 1 до 20, крім чисел, кратних 3. 
//Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.    

let number = 1;

while (number <= 20) {
    if (number % 3 === 0) {
        continue;
    }
    console.log(number);
    number++;
}