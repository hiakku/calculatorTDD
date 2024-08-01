const add = (nums) =>{
    let delimiter = /[,\n]/;
    let arrOfNumbers = [];
    let numsCopy = nums;

    if (nums.startsWith('//')) {
        const customDelimiter = nums[2];
        delimiter = new RegExp(customDelimiter);
        numsCopy = nums.substring(4);
      }
    arrOfNumbers = numsCopy.split(delimiter);
    const negativeNumbers = arrOfNumbers.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error('ngative numbers not allowed: ' + negativeNumbers.join(', '));
    }
    const sum = arrOfNumbers.reduce(function(total, num){
        return parseInt(total) + parseInt(num)
    })
    return parseInt(sum || 0)
}
const addCalculatorTest = (params, output)=> {
    if (add(params) === output) {
      console.log("Test Passed");
    } else {
      console.error("Test Failed");
    }
  }

addCalculatorTest('',0)
addCalculatorTest('1',1)
addCalculatorTest('1, 5',6)
addCalculatorTest("1\n2,3",6)
addCalculatorTest("//;\n1;2",3)
addCalculatorTest("-1\n2,-3",6)

