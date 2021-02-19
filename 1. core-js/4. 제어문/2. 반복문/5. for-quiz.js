/*
- Quiz. 아래 요구사항에 맞는 코드를 작성하고 
        콘솔에서 실행하여 테스트하세요.
- 요구사항
1. 프로그램 실행 시 2~9단 중 무작위로 구구단이 등장하게 하세요.
2. for문과 while문으로 각각 구현하세요.
힌트) 먼저 2단을 구현해 본 뒤, 성공하면 랜덤 구구단으로 바꿔보기
- 출력 예시
====================
랜덤 구구단 4단
====================
4 x 1 = 4
4 x 2 = 8
4 x 3 = 12
4 x 4 = 16
4 x 5 = 20
4 x 6 = 24
4 x 7 = 28
4 x 8 = 32
4 x 9 = 36
*/

var floor = Math.floor(Math.random() * 8) + 2;
// var floor = +prompt("구구단 단수를 입력하세요");

console.log(`====================
랜덤 구구단 ${floor}단
====================`);
/*
for (var line=1; line <= 9; line++) {
    console.log(`${floor} x ${line} = ${floor * line}`);
}
*/
var line=1;
while (line <= 9) {
    console.log(`${floor} x ${line} = ${floor * line}`);
    line++;
}