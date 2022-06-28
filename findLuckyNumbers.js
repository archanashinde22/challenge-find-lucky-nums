// Write your code below this line.

function findLuckyNumbers(n){
    let possibleNums = [1,2,3,4,5,6,7,8,9,10]
    let luckyNums = []
    //create a for-loop to iterate over possibleNums array and move items to luckyNums
    for(let i = 0;i < n;i++){
      let randomIndex = Math.floor(Math.random() * possibleNums.length)
      luckyNums.push(possibleNums[randomIndex])
      possibleNums.splice(randomIndex,1)
    }
    return luckyNums
  }
  
  console.log(findLuckyNumbers(5))