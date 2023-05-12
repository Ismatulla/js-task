
// 29-dars topshirig'i
// 1-task
// if num=3, =>1+2+3 etc...
function addUp(num) {
  let counter = 0;
  for (let i = 0; i <= num; i++) {
    counter += i
  }
  return counter
}


//2nd task
function highestDigit(number) {

  let string = String(number)
  let array = string.split('')

  let biggestNum = 0
  for (let i = 0; i < array.length; i++) {
    if (biggestNum < array[i]) {
      biggestNum = array[i]
    }

  }
  return Number(biggestNum)
}


highestDigit(51)
// 2nd way
function highestDigit(number) {
  let string = String(number)
  let arr = string.split('')
  let result = Math.max(...arr)

  return Number(result)
}

// 3rd TASK
function isPandigital(num) {
  let digits = String(num).split('')
  for (let i = 0; i <= 9; i++) {
    if (!digits.includes(String(i))) {
      return false

    }
  }
  return true

}
isPandigital(8146327815320);

// 30-dars-topshirig'i

// tuckin array
// 1st task
function tuckIn(arr1, arr2) {
  return [arr1[0], ...arr2, arr1[1]]
}

// 2nd task
function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length)
}

// 3rd task

function sortIt(arr) {
  return arr.sort()
}