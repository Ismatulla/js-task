// Task 1

function maxTotal(nums) {
  let sorted = nums.sort((a, b) => b - a);
  let fiveMax = sorted.slice(0, 5);
  return fiveMax.reduce((cur, ac) => cur + ac, 0)
}

// Task 2

function sliceSum(arr, n) {
  let newNum = arr.slice(0, n)
  return newNum.reduce((cur, ac) => cur + ac, 0)
}

// Task3

function cardHide(card) {
  const visiblePart = card.slice(-4)
  const stars = card.slice(0, -4).length
  const replaceWithStar = "*".repeat(stars);
  return replaceWithStar + visiblePart
}