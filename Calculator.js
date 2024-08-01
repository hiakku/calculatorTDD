const add = (nums) =>{
    const arrOfNumbers = nums.split(',')
    const sum = arrOfNumbers.reduce(function(total, num){
        return parseInt(total) + parseInt(num)
    })
    return sum || 0;
}

const addCalculatorTest = ()=> {
    //For different type of strings numbers
    if (add('') === 0 || add('1'===1) || add('1, 5')===6) {
      console.log("Test Passed");
    } else {
      console.error("Test Failed");
    }
  }

addCalculatorTest()