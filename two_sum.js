const nums = [1, 9, 10, 11, 8, 6]
const target = 7

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i])
    console.log(target, '----')
    for (let j = 0; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            console.log(i)
        }
    }
}




console.log(nums)