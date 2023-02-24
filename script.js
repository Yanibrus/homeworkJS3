
let chislo = +prompt('Введите число')

chislo = !isNaN(chislo) && chislo != 0 ? chislo : false
console.log(chislo);

let stepen = +prompt('Введите степень') 

stepen = !isNaN(stepen) && stepen != 0 ? stepen : 2
console.log(stepen);

let result = 1

let i = 0

for (let i = 0; i < stepen ; i++) {   

    result = result * chislo;
    
} alert('Ответ: ' + result)






do {
    var num = +prompt('Введите количество ступеней')
    num == isNaN(num) ? 5 : num
    var symbol = prompt('Введите символ отступа')
    var final = prompt('Введите конечный символ')
    
} while (num == 0 || tab == ' ' || last == ' ');

for (let i = 0; i < num; i++) {
    
    console.log(num + symbol + final);
    
}