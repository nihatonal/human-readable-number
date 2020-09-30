module.exports = function toReadable (number) {
  let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
              'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
              'seventeen', 'eighteen', 'nineteen'];
  let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
              'ninety'];

  let numberStr = number.toString();

  if (number < 0) throw new Error('Negative numberbers are not supported.');

  if (number === 0) return 'zero';

  //the case of 1 - 20
  if (number < 20) {
    return ones[number];
  }
  
  //the case of 20 - 99
  if (numberStr[1] === "0" && numberStr.length === 2) {
    return tens[numberStr[0]];
  } else if(numberStr.length === 2) {
    return tens[numberStr[0]] + ' ' + ones[numberStr[1]];
  }

  //100 and more
  if (numberStr.length == 3) {
    if (numberStr[1] === '0' && numberStr[2] === '0')
      return ones[numberStr[0]] + ' hundred';
    else
      return ones[numberStr[0]] + ' hundred ' + toReadable(+(numberStr[1] + numberStr[2]));
  }

  if (numberStr.length === 4) {
    var end = +(numberStr[1] + numberStr[2] + numberStr[3]);
    if (end === 0) return ones[numberStr[0]] + ' thousand';
    if (end < 100) return ones[numberStr[0]] + ' thousand ' + toReadable(end);
    return ones[numberStr[0]] + ' thousand ' + toReadable(end);
  }
}
