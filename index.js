
function recursiveFibonacciMemo(num, memoArr = [0, 1]) {
  console.log('memoization array -> ', memoArr)  // check how many times f-n was called

  // use memoization to avoid redundant call
  if(memoArr[num] || num === 0 || num === 1) return memoArr[num]
  else {
    memoArr[num] = recursiveFibonacciMemo(num - 1, memoArr) + recursiveFibonacciMemo(num - 2, memoArr);

    return memoArr[num]
  }
}


console.log(
  recursiveFibonacciMemo(7)
)
