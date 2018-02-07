function fib(){
  let fibOne = 0;
  let fibTwo = 1;
  for (let i = 2; i < 100; i++) {
    let newFib = fibOne + fibTwo;
    //const lastIndex = nums.length - 1;
    fibOne = fibTwo;
    fibTwo = newFib;
    return newFib;
  }
}
console.log(fib());

function numToStrings(numArray){
  return _.map(numArray, function(numArray){ return numArray.toString();})
  //return _.map(nums, num => num.toString());
  //return _.map(nums, num => `${num}`);
}
console.log(numToStrings(fib()));
function numEvenNums(array) {
  let count = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      count++;
    }
  }
  return count;
}
console.log(numEvenNums(fib()));