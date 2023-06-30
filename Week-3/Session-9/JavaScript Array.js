function divideArray(numbers) {
    let evenNums = [];

    let oddNums = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evenNums.push(numbers[i]);
      } 
      else {
        oddNums.push(numbers[i]);
      }
    }
  
    evenNums.sort((x, y) => x - y);

    oddNums.sort((x, y) => x - y);
  
    console.log("Even numbers:");
    if (evenNums.length) {
      evenNums.forEach((evenNumber) => console.log(evenNumber));
    } 
    else {
      console.log("None");
    }
  
    console.log("Odd numbers:");
    if (oddNums.length) {
      oddNums.forEach((oddNumber) => console.log(oddNumber));
    } 
    else {
      console.log("None");
    }
  }
  

  let nums = [4, 2, 9, 1, 8];
  divideArray(nums);

  let nums2 = [4, 2, 8];
  divideArray(nums2);
  