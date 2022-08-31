//*편한 방법으로 하기 
// let x = 15;
// let y = 20;
// let z = 18;

// if(1 <= x <= 20 && 1 <= y <= 20 && 1 <= y <= 20){
//   let average = (x + y + z)/3;
//   console.log('평균값은 ' + average);
//   if(average < 10) {
//     console.log('평균값이 10보다 ' + 'under');
//   } else {
//     console.log('평균값이 10보다 ' + 'over');
//   }
// } 


//*함수로 만들기
function average(x, y, z){
  if(1 <= x <= 20 && 1 <= y <= 20 && 1 <= z <= 20){
    let averageVAl = (x + y + z)/3;
    console.log('평균값은 ' + averageVAl);
    if(averageVAl < 10) {
      console.log('평균값이 10보다 ' + 'under');
    } else {
      console.log('평균값이 10보다 ' + 'over');
    }  
  }
};
average(10, 14, 12); 


