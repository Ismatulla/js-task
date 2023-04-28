// 1st task

// let arr = [34, 12, 78, 82, 0];
let arr = [-1, 4, 5, 67, 98, 0, 3.14]
function findMinMax(arr) {
let min=arr[0];
let max=arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      console.log('please don\'t use string in your array');
      return
    }
    if (arr[i] < min) {
      min = arr[i]
    } else if (arr[i] > max) {
      max = arr[i]
    }
  }
  console.log(min);
  console.log(max)
}
findMinMax(arr)

// step by step explanation;
// step 1  min=34 max=34;
// step 2 first if condition fulfilled (arr[i]=12<min=34)so min=>12
// step3 min=12 arr[i]=78 max[0]=34 second if condition fulfillied (arr[i]>max)=>max=78;
//step 4 arr[i]=82; min=12; max=78 again second if condition fulfilled so max=>82
//step 5 arr[i]=43 max=82; min=12; here 43 not bigger than 82 and less than 12 so condition remains same ;

// OUTPUT will be(12,82)

// 2nd task
function textToNumber(num) {
  if (num === 9) {
    console.log('nine')
    return
  }
};

function textToNumbers(num, string = 'default text') {
  switch (num) {
    case 0:
      console.log(`ZERO ${string}`)
      break;
    case 1:
      console.log(`ONE ${string}`)
      break;
    case 2:
      console.log(`TWO ${string}`)
    case 3:
      console.log(`THREE ${string}`)
      break;
    case 4:
      console.log(`FOUR ${string}`)
      break;
    case 5:
      console.log(`FIVE ${string}`)
      break;
    case 6:
      console.log(`SIX ${string}`)
      break;
    case 7:
      console.log(`SEVEN ${string}`)
      break;
    case 8:
      console.log(`EIGHT ${string}`)
    case 9:
      console.log(`NINE ${string}`)
    default:
      console.log('pls enter a valid number !')
  }
}

textToNumbers(0);

//  3rd task 
const list = [5,3,7,3,5,7,1]
let uniqNum
function findSingleNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    let counter = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        counter++
      }
    }
    if (counter === 1) {
      uniqNum = arr[i]
      break

    }
  }
  console.log(uniqNum)
}
findSingleNumber(list)

// step by step explanation
// outer loop gets one and one will be compared with each number which is coming in the inner loop for example 1 will be compared to all list and if there is a match, counter will be incremented. counter++;  1=>[1,2,3,3,2,1,4] has 2 matches so counter=2;
// when it is four 4=>[1,2,3,3,2,1,4] there is only one match counter=1 so if counter is one , outer loop will be broken here and result is printed 

