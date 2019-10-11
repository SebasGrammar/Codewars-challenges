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

/* Get Nth Even Number */

function nthEven(n) {
  return 2 * n - 2
}

/* Isograms */

function isIsogram(str){

  let counter = []
  for (let index = 0; index < str.length; index ++) {
    let compare = str[index].toLowerCase()
    if (counter.includes(compare)) {
      return false
    } else {
      counter.push(compare)
    }
  }
  return true
  
}

/* A Needle in the Haystack */

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`
}

/* rot13 */

function rot13(message) {
  let str = ""
  let parallel = message.split("").map(char => char.toLowerCase())

  for (let i = 0; i < message.length; i++) {
    let temp = ""
    let letter = parallel[i]
    if (letter.match(/[a-z]/)) {
      if (alphabet[alphabet.indexOf(letter) + 13]) {
        temp = alphabet[alphabet.indexOf(letter) + 13]
      } else {
        temp = alphabet[alphabet.indexOf(letter) + 13 - 26]
      }
      if (message[i] === message[i].toLowerCase()) {
        str += temp
      } else {
        str += temp.toUpperCase()
      }
    } else {
      str += letter
    }
  }
  return str
}
