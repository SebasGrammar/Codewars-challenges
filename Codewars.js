/* Sum two smallest numbers */

function sumTwoSmallestNumbers(numbers) {  

  let sortedArr = [...numbers].sort((a, b) => a - b)
  return sortedArr[0] + sortedArr[1]
  
}

/* Sum of Intervals */

function sumIntervals(intervals) {
  let newArr = []
  intervals.map(arr => newArr.push(arr))
  let universalArr = []

  for (let arr of newArr) {

    while (arr[0] < arr[1]) {
      arr[0]++
      if (!universalArr.includes(arr[0])) {
        universalArr.push(arr[0])

      }
    }
  }
  return universalArr.length
}

/* Sum of Digits / Digital Root */

function digital_root(n) {

  let x = n.toString().split("").map(number => Number(number)).reduce((acc, cur) => acc + cur)
  if (x < 10) {return x}
  return digital_root(x)

}

/* Moving Zeros To The End */

function moveZeros(arr) {

  return [...arr.filter(a => a !== 0), ...arr.filter(a => a === 0)]
  
}
