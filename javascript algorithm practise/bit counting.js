var countBits = function(n) {
    // Program Me
    var number = n.toString(2); // converting to binary
    var count = 0; // to hold number of 1's
    for(var i = 0;i<number.length;i++)
      {
        if(number[i] === '1')
          {
            count++;
          }
      }
    return count;
  };

  // best practises
  countBits = n => n.toString(2).split('0').join('').length;