const sayHello = function (name) {
    console.log("Hello, " + name);
};

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

const sayHelloConsole = function (name) {
    console.log("Hello, " + name);
};

sayHelloConsole("John") ;

const returnSayHello = function (name) {
    return "Hello, " + name;
};

const greeting = returnSayHello ("John");
console.log(greeting);
