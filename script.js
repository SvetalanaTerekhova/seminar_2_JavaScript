/* Задание 1
Создать переменные num1, num2 которые пользователь вводит с клавиатуры
Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3. */

let num1 = Number(prompt(`Введите первое число`));
let num2 = Number(prompt(`Введите второе число`));

if (num1 <= 1) {
    alert(`Первое число ${num1} меньше или равно 1`);
}

else {
    alert(`Первое число ${num1} больше 1`);
}

if (num2 >= 3) {
    alert(`Второе число ${num2} больше или равно 3`);
}

else {
    alert(`Второе число ${num2} меньше 3`);
}



/* Задание 2
Перепишите код к тернарному оператору: */

/*
let test = true;
if (test === true) {
    console.log('+++');
} else {
    console.log('---');
}
 


let resul = (test === true) ? console.log('+++') : console.log('---'); */



/* Задание 3
В переменной day лежит какое - то число из интервала от 1 до 31. 
Определите в какую декаду месяца попадает это число(в первую, вторую или третью). */

/*
let day = Number(prompt(`Введите значение переменной day`));

if (day >= 1 && day <= 10) {
    alert(`day=${day} попадает в первую декаду месяца`);
}

if (day >= 11 && day <= 20) {
    alert(`day=${day} попадает во вторую декаду месяца`);
}

if (day >= 21 && day <= 31) {
    alert(`day=${day} попадает в третью декаду месяца`);
}

if (day <= 0 || day >= 32) {
    alert(`day=${day} число не попадает ни в какую декаду месяца`);
} */



/* Задание 4
Необходимо от пользователя получить число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц. */

/*
let num = Number(prompt(`Введите положительное целое число`));
let units = num % 10;
let dozens = (num % 100 - units) / 10;
let hundreds = (num % 1000 - (dozens * 10) - units) / 100;
alert(`В числе ${num} количество сотен: ${hundreds}, десятков: ${dozens}, единиц: ${units}`); */
