var detectNetwork = function(cardNumber) {
  if (cardNumber.length === 14 && cardNumber[0] === '3' && (cardNumber[1] === '8' || cardNumber[1] === '9')) {
  	return 'Diner\'s Club';
  }
  if (cardNumber.length === 15 && cardNumber[0] === '3' && (cardNumber[1] === '4' || cardNumber[1] === '7')) {
  	return 'American Express';
  }
  if ((cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) && cardNumber[0] === '4') {
  	return 'Visa';
  }
  if (cardNumber.length === 16 && cardNumber[0] === '5' && (cardNumber[1] === '1' || cardNumber[1] === '2' || cardNumber[1] === '3' || cardNumber[1] === '4' || cardNumber[1] === '5')) {
  	return 'MasterCard';
  }
};

