
exports.min = function min (array = "0") {
    let minValue = 0;
    if (array == 0 ) {
        return 0;
    } else {
    for (let i = 0;i < array.length;i++) {
      if (array[i] < minValue) {
        minValue = array[i];
        } 
      }
    }
      return minValue;
}

exports.max = function max (array = "0") {
    let maxValue = 0;
    if (array == 0) {
      return 0;
      } else {
    for (let i = 0;i < array.length;i++) {
      if (array[i] > maxValue) {
        maxValue = array[i];
        } 
      }
      }
      return maxValue;
}

exports.avg = function avg (array = "0") {
    let value = 0;
    let avgValue;
    if (array == 0) {
        return 0;
    } else {
    for (let i = 0;i < array.length;i++) {
      value += array[i];
      avgValue = value / array.length;
      }
    }
    
   return avgValue;
}
