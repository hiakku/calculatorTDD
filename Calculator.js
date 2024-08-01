const add = (nums) =>{
    const arrOfNumbers = nums.split(',')
    const sum = arrOfNumbers.reduce(function(total, num){
        return parseInt(total) + parseInt(num)
    })
    return sum || 0;
}

add('')
add('1')
add('1, 5')