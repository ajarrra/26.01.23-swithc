//функции это набор инструкциий в котором рассписываем
function sayHello() {
    console.log("Hello");
}

sayHello(); // использовали эту функцию

function sayBye (){
    console.log("Bye");
}
sayBye();
sayBye();
sayBye();

function sayHelloTo(name){ // name это имя переменной
    console.log("Hello " + name);// 
}
sayHelloTo("Ajara");// Ajara сами пишем и оно выводится
sayHelloTo("Elya"); 

function myCity(city){
    console.log("I was born in " + city);
}
myCity("Bishkek");
myCity("Karakol");

function myFriend(name){
    console.log("My friend is " + name);
}
myFriend ("Nestna");//my friends is Nestana
myFriend ("Aiday");
myFriend("Anton");


function printSom(a,b){//решение цифр 
    let som = a + b;
    console.log("The som of " + a + " and " + b + " is " + som);
}

printSom(5,10);// the som of 5 and 10 is 5
printSom(-5, 0);
printSom(100, 125);

function printDiff(a, b){
    let diff = a - b
    console.log( "the diff of "+ a + " - " + b + " = " + diff );
}

printDiff(5,10); 


function printMultiply (a,b){
    let multiply = a * b
    console.log("The multiply of " + a + " * " + b  + " = " + multiply);
}
printMultiply(10,10);

function printDivide(a,b){
    let divide = a / b
    console.log("The multiply of " + a + " / " + b  + " = " + divide);
}
printDivide(5,10);


function isDivisibleBy(a,b){
    let divisibleBy = a % b;
    if ( divisibleBy=== 0){
        console.log(a + " is not divisible by " + b );
    }
    else if( divisibleBy === 1 ){
        console.log ( a + " is divisible by " + b);
    }
}
// 5 % 2 = 1
// 4 % 2 = 2
isDivisibleBy(5,2);
isDivisibleBy(4,2);



function isEven (a){
    let even = a; 
   if ( a % 2 === 0){ 
    console.log ( a + " is  even ");
}
  else if ( a % 2 === 1){
    console.log (a + " is not even");
   }

  else if ( a === 0){
    console.log ( a + " is not even");
  }  
  else{
    console.log (a + " asd is not a number");
  }
   
   
}

isEven(5);// 5 is not even 
isEven(2);// 2 is even 
isEven("asd");//asd is not a number 
isEven(0);//0 is not even










