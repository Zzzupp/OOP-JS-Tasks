// Задание 3


// Создайте класс Calculator, который создаёт объекты. У класса есть конструктор, который запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта, и два метода:
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.

class Calculator{
  constructor(){
    this.firstNumber = Number(prompt('enter a number'));
    this.secoundNumber = Number(prompt('enter a secound number'));
    this.sum();
    this.mul();
  }
  sum(){
    console.log(typeof this.firstNumber)
    if(typeof this.firstNumber == 'number' && typeof this.secoundNumber == 'number'){
      alert(this.firstNumber + this.secoundNumber)
    } else {
      alert('enter a number')
      this.constructor();
    }
  }
  mul(){
    if(typeof this.firstNumber == 'number' && typeof this.secoundNumber == 'number'){
      alert(this.firstNumber * this.secoundNumber)
    } else {
      alert('enter a number')
      this.constructor();
    }
  }
}

let calculSummon = new Calculator();


