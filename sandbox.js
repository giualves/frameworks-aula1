///////////////////////////////////////////////////////////////////////////////////////////////////
// variáveis
///////////////////////////////////////////////////////////////////////////////////////////////////

// console.log("Hello world!");

// if (true) {

//     a = 10;
// }

// (function() {
//     pi = 3.141592;
// })();


// (function() {
//     pi = "pi";
// })();

// console.log(pi);

// var ("global" no bloco atual (ex: função)) / variavel direto sem var = global mesmo! 
// prefira sempre utilizar let e const (ES6)

// if (true) {
//     let nome = "Adriano";
//     const pi = 3.141592;
//     nome = "Maria";
//     //pi = 3; // TypeError: Assignment to constant variable.
//     console.log(nome); 
//     console.log(pi);
// }

//console.log(pi); // ReferenceError: pi is not defined

// var = permite redeclaração, redefinição e tem escopo "global"
// let = permite redefinição, mas não redeclaração e tem escopo local
// const = não permite nem redeclaração e nem redefinição - tem escopo local

// nomenclatura...

// Livro Clean Code...

// identificador válido
// [a-zA-Z_$][a-zA-Z0-9_$]             // reg exp = para nomes de variáveis
//let _a123______$$$asfsadf123 = 10;   // padrões de nome
//let tmp = 0;                         // nunca utilizar nomes ruins... que não significam nada
//let totalParcialSoma = 0;            // nome decente!

///////////////////////////////////////////////////////////////////////////////////////////////////
// tipos de dados
///////////////////////////////////////////////////////////////////////////////////////////////////

// tipos primitivos

// console.log( typeof 10 );           // Number IEEE 754
// console.log( typeof 10.2 );

// console.log( typeof "ABC" );        // string
// console.log( typeof `ABC` );
// console.log( typeof 'ABC' );

// console.log( typeof true );         // boolean

// console.log( typeof null );         // object

// console.log( typeof undefined );    // undefined


// tipos de objetos

// console.log( typeof function sum(a, b) { return a + b} );   // function

// console.log( typeof {name : "JavaScript" } );               // object
// console.log( typeof [1, 2, 3] );                            // object
// console.log( typeof /[a-zA-Z_$]/ );                         // object
// console.log( typeof new Date() );                           // object

///////////////////////////////////////////////////////////////////////////////////////////////////
// string
///////////////////////////////////////////////////////////////////////////////////////////////////

// let a = "ABC";
// let b = `ABC`;
// let c = 'ABC';

// console.log( a === b );
// console.log( b === c );
// console.log( a === c );

// == / !=
// validação do valor / mas não do tipo
//console.log( 0 == '0' );

// === / !==
// validação do tipo e do valor
//console.log( 0 === '0' );

// let host = "localhost";
// let port = "3000";
// let resource = "users";

// //let url = "https://" + host + ":" + port + "/" + resource;

// let url = `https://${host}:${port}/${resource}`;

// console.log(url);

///////////////////////////////////////////////////////////////////////////////////////////////////
// string api
///////////////////////////////////////////////////////////////////////////////////////////////////

// let language = "JavaScript";
// console.log( language.length );
// console.log( language.indexOf("a") );
// console.log( language.lastIndexOf("a") );
// console.log( language.charAt(0) );
// console.log( language.startsWith("J") );
// console.log( language.endsWith("ipt") );
// console.log( language.substring(0, 4) );
// console.log( language.substring(4) );
// console.log( " ronszcka@gmail.com ".trimStart() );
// console.log( language.replace("Java", "ECMA") );

///////////////////////////////////////////////////////////////////////////////////////////////////
// numbers
///////////////////////////////////////////////////////////////////////////////////////////////////

// console.log( 0.1 + 0.2 );
// console.log( 666.7 - 666.6 );
// console.log( 33.3 * 3);

// console.log( 10 );          // decimal
// console.log( 0x12 );        // hexadecimal
// console.log( 0b101 );       // binário
// console.log( 0o12 );        // octal

///////////////////////////////////////////////////////////////////////////////////////////////////
// operadores lógicos
///////////////////////////////////////////////////////////////////////////////////////////////////

// let a = 10;
// let b = 5;

// if (a > 1 && b < 20) {
//     console.log(true);
// }

// if (true || false) {
//     console.log(true);
// }

// // operador ternário

// const avaliacao1 = (a >= 7 ? "bom" : "ruim");
// const avaliacao2 = (b >= 7 ? "bom" : "ruim");

// console.log(avaliacao1);
// console.log(avaliacao2);

///////////////////////////////////////////////////////////////////////////////////////////////////
// objetos
///////////////////////////////////////////////////////////////////////////////////////////////////

// let obj = {};

// console.log(obj);
// console.log(typeof obj);

// const book = {
//     title: "Clean Code",
//     author: "Robert Martin",
//     pages: 464,
//     avaiable: true
// }

// console.log(book);
// console.log(book.pages);

// let title = "Clean Code";
// let author = "Robert Martin";
// let pages = 464;
// let avaiable = true;

// const book = {
//     title: title,
//     author: author,
//     pages: pages,
//     avaiable: avaiable
// }

// console.log(book);

// // shorthand notation - ES6

// const book2 = {
//     title,
//     author,
//     pages,
//     avaiable
// }

// console.log(book2);

// console.log( book == book2 );
// console.log( book === book2 ); // objeto / referências

// const book3 = book2;

// console.log( book2 === book3 ); // objeto / referências

// book3.author = "Adriano";

// console.log(book2.author);

///////////////////////////////////////////////////////////////////////////////////////////////////
// JSON
///////////////////////////////////////////////////////////////////////////////////////////////////

// let title = "Clean Code";
// let author = "Robert Martin";
// let pages = 464;
// let avaiable = true;

// const book = {
//     title: title,
//     author: author,
//     pages: pages,
//     avaiable: avaiable
// }

// const json = JSON.stringify(book);

// console.log(book);
// console.log(typeof book);

// console.log(json);
// console.log(typeof json);

// const obj = JSON.parse(json);

// console.log( obj );
// console.log( typeof obj );

///////////////////////////////////////////////////////////////////////////////////////////////////
// FUNÇÕES
///////////////////////////////////////////////////////////////////////////////////////////////////

// function declaration
// function sum(a = 0, b = 0) {     // default parameters
//     return a + b;
// }

//console.log( sum(1, 2) );
//console.log( sum(1) );

// function expression

// const subtract = function(a = 0, b = 0) {
//     return a - b;
// };

// //console.log( subtract(1, 2) );

// const calculator = function (fn) { // function as parameter
//     return function (a, b) { // returning a function
//         return fn(a, b); // call of a param function
//     }
// }

// let total = calculator(sum)(5, 2);

// console.log(total);

// const sumAll = function() {
    
//     console.log(arguments);

//     let total = 0;
    
//     for (let argument in arguments) {
//         total += arguments[argument];
//     }

//     return total;

// }

// console.log( sumAll(1, 2, 3, 4, 5) );

// // rest parameter

// const sumAll2 = function(...numbers) {

//     console.log(numbers);
    
//     let total = 0;
    
//     for (let number of numbers) {
//         total += number;
//     }

//     return total;

// }

// console.log( sumAll2(1, 2, 3, 4, 5) );

///////////////////////////////////////////////////////////////////////////////////////////////////
// this
///////////////////////////////////////////////////////////////////////////////////////////////////

// const calculateArea = function() {
//     console.log( this.x * this.y );
// };

const rectangle = {
    x: 10,
    y: 2,
    calculateArea: function() {
        console.log(this);
        console.log( this.x * this.y );
    }
}

x = 5;
y = 3;

// console.log( calculateArea() );

// function myFunction() {
//     return this;
// }

// console.log( myFunction() );

rectangle.calculateArea();

let method = rectangle.calculateArea;
let methodbinded = rectangle.calculateArea.bind(rectangle);

console.log(method);
console.log(methodbinded);

(function teste() {
    setTimeout(rectangle.calculateArea.bind(this), 3000);
}());

//function setTimeout(fn, time)...