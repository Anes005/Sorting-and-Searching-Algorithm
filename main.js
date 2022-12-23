const num = [74, 18, 10, 5, 84, 24, 105];
 
 num.sort(compareFunction);
  console.log(num);

  function compareFunction(a, b) {

      return a - b;
      

  }