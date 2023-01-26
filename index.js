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
myFriend ("Nestna");
myFriend ("Aiday");
myFriend("Anton");