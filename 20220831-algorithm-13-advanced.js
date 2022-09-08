//? a. 1부터 20까지의 범위 중 임의의 3개의 숫자가 중복되지 않은 난수를 배열, inputData에 담기도록 처리하시오.


//1. 난수값 생성하기(정수로..)
function getRandomArbitrary(min, max) {
  min = Math.ceil(min); //반올림함수
  max = Math.floor(max); //반내림함수
  return Math.floor(Math.random()*(max-min)) + min; 
  //반환값 : min보다 크거나 같으며, max보다 작다.
}
// console.log(getRandomArbitrary(1,20));


//2. 난수 3개를 수집하는 방법? -> 값의 '모음'
const inputData = [getRandomArbitrary(1,20), getRandomArbitrary(1,20), getRandomArbitrary(1,20)];
// console.log(inputData); //ok


//3. 값을 검사하는 방법? -> 제어문
// console.log(typeof(inputData)); //object
for(const key in inputData){
  // console.log(key); //0,1,2
  // console.log(inputData); //배열 숫자*3 
  // console.log(typeof(inputData[key])); //number  
  if(typeof(inputData) === 'object' && typeof(inputData[key]) === 'number'){
    //4.검사된 값을 나누는 방법? -> 특정 메서드..
    // console.log(inputData); //
  }
}

//? b. 객체  objectData의 property인 key, "first", "second", "third"에 주문 a를 통해 얻은 데이터를 각각의 키(key)의 값으로 삽입(insert)하시오.

const objectData = {
  first : inputData[0],
  second : inputData[1],
  third : inputData[2],
}
// console.log(objectData);


//? c. objectData에 담긴 세 개의 난수 중 중앙값에 해당하는 값을 출력하시오.
//중앙값 :  어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값
//중앙값 : 정렬된 배열에 대하여 배열을 절반으로 나누는 연습...


//! 강사 답안-------------------------------------------------

function randomData(minInt, maxInt) {
  const getRandomValue = Math.random()*(maxInt - minInt + 1) + minInt;
  return Math.floor(getRandomValue);
}

function getRandomIntArray(count, minInt, maxInt) {
  const setArray = [];

  let handle = 0; 
  while(handle < count) {
    let RandomValue = randomData(minInt, maxInt);
    if(setArray.includes(RandomValue) === false) {
    setArray.push(RandomValue);
    handle++;
    }
  }
  setArray.sort((a, b) => a - b); //중앙값 정렬 
  // console.log(setArray); 
  return setArray;
}
const setData = getRandomIntArray(3, 1, 20);
console.log(setData);

