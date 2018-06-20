var detectNetwork = function(cardNumber) {
  var length = cardNumber.length;
  var subStr1 = cardNumber.substr(0, 1);
  var subStr2 = cardNumber.substr(0, 2);
  if (length === 14 && (subStr2 === '38' || subStr2 === '39')) {
  	return 'Diner\'s Club';
  }
  if (length === 15 && (subStr2 === '34' || subStr2 === '37')) {
  	return 'American Express';
  }
  if ((length === 13 || length === 16 || length === 19) && subStr1 === '4') {
  	return 'Visa';
  }
  if (length === 16 && (subStr2 === '51' || subStr2 === '52' || subStr2 === '53' || subStr2 === '54' || subStr2 === '55')) {
  	return 'MasterCard';
  }
  if ((length === 16 || length === 19) && cardNumber[0] === '6' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '1')
  	return 'Discover';
};