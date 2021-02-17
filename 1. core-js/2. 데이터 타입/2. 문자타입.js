

var greeting;
greeting = 'hello';
greeting = "안녕하세요";
greeting = `니하오`;

console.log(typeof greeting);

var exStr = '그는 나에게 "위험해"라고 말했다.';
console.log(exStr);

exStr = "Let's go!";
console.log(exStr);

exStr = "그는 나에게 \"위험해\"라고 말했다.";
console.log(exStr);

var temp = '<ul>\n\t<li>\n\t\t<a href="#">Home</a>\n\t</li>\n</ul>';
console.log(temp);

var template = `<ul>
    <li>
        <a href="#">Home</a>
    </li>
</ul>`;
console.log(template);

console.log("===================================");

var month = 3;
var day = 1;
var anniversary = "삼일절";

console.log(month + "월 " + day + "일은 " + anniversary + "입니다.");  

//템플릿 리터럴(ES6)
console.log(`${month}월 ${day}일은 ${anniversary}입니다.`);

console.log(100 + 200);
console.log('100' + '200');
