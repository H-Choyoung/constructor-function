//? 생성자 함수(constructor function) 연습
//생성자 함수는 1. 함수 이름의 첫글자는 대문자로 시작
//2. 반드시 'new' 연산자를 붙여 실행

function User(name) {
  //this = {}; (빈 객체가 암시적으로 만들어짐)

  //새로운 프로퍼티를 this에 추가함 
  this.name = name;
  this.isAdmin = false; 

  //return this; (this가 암시적으로 반환됨)
}

let user = new User('홍길동');

console.log(user.name); //홍길동
console.log(user.isAdmin); //false

// ------------------------------------------------------

//재사용할 필요가 없는 복잡한 객체를 만들 때 : 코드를 익명 생성자 함수로 감싸주기
let userTwo = new function() {
  this.name = '홍길동';
  this.isAdmin = false;
}
//위 생성자 함수는 익명함수기에 일회성이지만, 재사용을 막고 코드를 캡슐화할 수 있다. 


// ------------------------------------------------------

//* 생성자와 return문
//객체를 반환한다면 this 대신 객체가 반환
function FurUser() {
  this.name = '뱀';
  return {name: '고양이'};
}
console.log(new FurUser().name); //고양이

//아무것도 반환하지 않을때 
function FurLess() {
  this.name = '뱀';
  return;
}
console.log(new FurLess().name); //뱀

//원시형을 반환한다면 return문이 무시됨

// ------------------------------------------------------

//*생성자 내 메서드
function User(name){
  this.name = name;

  this.sayHi = function() {
    console.log('저는 ' + this.name + '입니다.');
  };
}
let me = new User('홍길동');
me.sayHi(); //저는 홍길동입니다. 

//*함수 두 개로 동일한 객체 만들기
//new A() === new B()
let em = {};
function A() {
  return em;
}
function B() {
  return em;
}

let a = new A;
let b = new B;

console.log(a === b); //true

//*계산기 만들기
function Calc(){
  this. //작업 중...
}
let calc = new Calc();
calc.read();

console.log('합계' + calc.sum());
console.log('곱' + calc.mul());


