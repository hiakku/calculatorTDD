const add = (nums) =>{
    const delimiter = /[,\n]/;
    const arrOfNumbers = nums.split(delimiter);
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

