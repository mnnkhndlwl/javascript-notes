function findOutlier(integers){
    const oddArray = [];
    const evenArray = [];
    for (let integer of integers) {
      if (integer % 2 === 0) {
        evenArray.push(integer);
      } else {
        oddArray.push(integer);
      }
    }
    return oddArray.length === 1 ? oddArray[0] : eventArray[0];
  }

  //best practise

  function findOutlier(int){
    var even = int.filter(a => a % 2 === 0);
    var odd = int.filter(a  => a % 2 !== 0);
    return even.length === 1 ? even[0] : odd[0];
  }