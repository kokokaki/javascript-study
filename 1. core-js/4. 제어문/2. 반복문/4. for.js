// 1 ~ 10까지의 총합을 구하는 로직
var total = 0;

for (var n = 1; n <= 10; n++) { 
    total += n; //반복 실행문
}
console.log(`총합: ${total}`);





// 7~100사이의 정수중 7의 배수를 모두 출력하기
for (var num = 7; num <= 100; num += 7) {    
    console.log(num);
}



console.log("===============================");

// 1 ~ 78 사이의 정수 중 13의 배수 모두 출력하기
for (num = 1; num <= 78; num++) {
    if (num % 13 === 0) {
        console.log(num);
    }    
}