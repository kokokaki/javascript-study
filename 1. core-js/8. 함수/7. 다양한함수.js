//기본 형태 : 함수 정의문
function add1(n1, n2) {
    return n1 + n2;
}
//함수 리터럴: 함수 표현식
var add2 = function (n1, n2) {
    return n1 + n2;
};
//화살표 함수(ES6) : 함수 리터럴의 람다식형태
var add3 = (n1, n2) => {
    return n1 + n2;
};
var add4 = (n1, n2) => n1 + n2;

console.log(add1(5, 5));
console.log(add2(5, 5));
console.log(add3(5, 5));
console.log(add4(5, 5));

var greeting1 = function () {
    console.log('hello!');
};
var greeting2 = () => console.log('hello!');

greeting1();
greeting2();

console.log('========================');

//즉시실행 함수
(function (x, y) {
    console.log(`x + y = ${x + y}`);
}(60, 70));


//재귀 함수
console.log("==============================");

function countdown(n) {
    if (n < 0) return;
    console.log(n);
    countdown(n - 1);
}
countdown(5);

console.log("============================");

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));

function compute(num) {
    if (num <= 1) return num;
    return compute(num - 1) + compute(num - 3);
}
console.log(compute(4));



//중첩 함수
console.log("==========================");

function outer() {
    var x = 1;

    function inner() {
        var y = 2;
        console.log(x + y);        
    }
    inner();
}

outer();
// inner();

