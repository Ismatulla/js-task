// 28-dars-topshirig'i
// 1ST TASK
// function checkTitle(title) {
//   let arrFromString = title.split(' ')
//   let result = arrFromString.map(arr => arr[0] === arr[0].toUpperCase())
//   return result.includes(false) ? false : true
// }

// 2ND TASK

// function countVowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u']
//   let counter = 0
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//       if (str[i] === vowels[j]) {
//         counter++
//       }
//     }
//   }
//   console.log(counter)
//   return counter
// }
// more optimal solution
// here has is property that is availabel on  Set() it checks and returns boolean
// so we have to use "has" ,thats why we used Set()

// function countVowels(str) {
//   const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
//   let counter = 0;
//   for (const char of str) {
//     if (vowels.has(char.toLowerCase())) {
//       counter++;
//     }
//   }
//   console.log(counter);
//   return counter;
// }

// countVowels('Celebration')



// 3RD TASK
// 1st way of solution
// function findLargestNums(arr) {

//   let newArr = []

//   arr.map(innerArr => {

//     let largestNum = innerArr[0]

//     innerArr.forEach(arr => {
//       if (largestNum < arr) {
//         largestNum = arr
//       }
//     })
//     newArr.push(largestNum)
//   })
//   console.log(newArr)
//   return newArr
// }
// 2nd way of solution where we use math.Max() and destructuring
// function findLargestNums(arr) {
//   let result = arr.map(innerArr => Math.max(...innerArr));
//   console.log(result)
//   return result
// }

// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])
// findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])


// 4TH TASK

function formatPhoneNumber(numbers) {
  const result1 = numbers.splice(0, 3).join('')
  const result2 = numbers.splice(0, 3).join('')
  const result3 = numbers.join('')
  console.log(numbers.join(''))
  console.log(`(${result1}) ${result2}-${result3}`)
  return `(${result1}) ${result2}-${result3}`
}
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"


// 5TH TASK

function isSymmetrical(num) {
  const result1 = String(num)
  const result2 = result1.split('').reverse().join('')
  const result3 = Number(result2)
  const result4 = num === result3 ? true : false

  return result4
}
isSymmetrical(10019)
// isSymmetrical(7227) ➞ true

//optimal way 
function isSymmetrical(num) {
  const reversedNum = Number(String(num).split('').reverse().join(''));
  return num === reversedNum;
}
