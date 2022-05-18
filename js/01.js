// document.write("안녕하세요");
// console.log("안녕하세요");

/* 
var box = 100;
console.log(box);

box = 30;
console.log(box);

box = "안녕";
console.log(box);
*/

// var a = 100;
// var b = "100";

// console.log(a);
// console.log(b);

// console.log(typeof(a));
// console.log(typeof(b));

/*
var tag = "<h1>타이틀</h1>";
console.log(tag);
console.log(typeof(tag));
document.write(tag);
*/

/* 
var s = "100";
var t = 30;
var d = 100;
console.log(s);
console.log(t);
console.log(typeof(s));
console.log(typeof(t));
console.log(s + t); // 연결연산자
console.log(d + t); // 더하기연산자

console.log(Number(s) + t); // 변환함수
*/ 

/*
var s1 = ture;
var s2 = "ture";
console.log(s1);
console.log(s2);

console.log(typeof(s1));
console.log(typeof(s2));
*/

// var s1 = 0;
// var s2 = 1;

// var s1 = 0;
// var s2 = -3.4;

// 공백은 true 로 출력
// var s1 = "";
// var s2 = "   ";

// console.log(Boolean(s1));
// console.log(Boolean(s2));

// unfinded , null 
/* 
var s;
var t = null;
console.log(s);
console.log(t);
*/

// 논리연산자
// console.log(10>5);
// console.log(2>5);

/* 
var s3 = null;
var s4;
console.log(Boolean(s3)); // false
console.log(Boolean(s4)); // false 
*/

// var num = 100;
// console.log(typeof num);
// console.log(typeof(num));

/* 
var myNum = 300;

// 함수 선언
function test() {
    var myNum = 10;
    console.log("hi");
    console.log("함수 안: " + myNum);
}
console.log("밖: " + myNum);
// 함수 호출
test();

console.log("밖2: " + myNum);
*/

/* 
var num1 = 10;
console.log(num1); // 10 

function test() {
    var num1 = 20;
    console.log(num1); // 20
}
test();
console.log(num1); // 10

console.log("--------");

var num2 =10;
console.log(num2); // 10 
{
    var num2 = 20;
    console.log("{}: " + num2); // 20
}

console.log(num2); // 10 
*/

/* 
var num1 = 10;
console.log(num1);

var num1 = 30;
console.log(num1);

let score = 20;
console.log(num2);

let score2 = 30;
console.log(num3);
*/

/* 
const myName = "홍길동";
let h_age = 28;
let h_height = 180;

console.log(myName);
console.log(h_age);
console.log(h_height);

h_age = 50;
h_height = 185;

console.log(h_age);
console.log(h_height);
*/

/* 
let num1 = 100;
console.log(num1);

{
    let num1 = 20;
    console.log(num1);
}

{
    let num1 = 50;
    console.log(num1);
}

console.log(num1);
*/

/* 
// 산술연산자
let num1 = 15;
let num2 = 2;
let result = num1 + num2; // 17 
console.log(result);

console.log(num1 - num2); // 13 
console.log(num1 * num2); // 30 
console.log(num1 / num2); // 7.5 
console.log(num1 % num2); // 1 
*/

/* 
// 문자결합연산자
let t1 = "학교";
let t2 = 20;
let t3 = 30;
console.log(t1 + (t2 + t3));
console.log(t2 + t3 + t1);
*/

/* 
// 복합대입연산자
let num1 = 10;
let num2= 3;
let result;

result = num1;
result = num1 + num2;
console.log(result);

num1 = 20; 
console.log(num1);
*/

/* 
var num1 = 10;
var num2 = 20;

let result;

// num1--;
console.log(num1);
console.log(++num1);
*/

/* 

let myNum = 1;
document.getElementById("num").innerText = myNum;

document.getElementById("btn_prev").onclick = function() {
    console.log("이전버튼");
    if(myNum == 1){
        myNum = totalNum;
    } else {
        myNum--;
    }
    document.getElementById("num").innerText = myNum;
};

document.getElementById("btn_next").onclick = function() {
    console.log("다음버튼");
    if(myNum ==3){
        myNum = 1;
    } else {
        myNum++;
    }
    numberSetting();
    console.log(document.getElementById("pic"));
    document.getElementById("num").innerText = myNum;
    getElementById("pic").style.border = "3px solid blue";
};
 
*/ 

let myNum = 1;
const totalNum = 5;
 
function numberSetting(){
    document.getElementById("num").innerText = myNum;
}
numberSetting();
 
document.getElementById("btn_prev").onclick = function(){
    console.log("이전버튼");
    if(myNum == 1){
        myNum = totalNum;
    } else {
        myNum--;
    }
    numberSetting();
};

var imgTag = document.getElementById("pic");
imgTag.setAttribute("src", "./img/img0"+num+".png");

document.getElementById("btn_next").onclick = function(){
    console.log("다음버튼");
    if(myNum == totalNum){
        myNum = 1;
    } else {
        myNum++;
    }
    numberSetting();
};

