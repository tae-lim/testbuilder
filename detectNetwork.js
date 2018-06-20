var detectNetwork = function(cardNumber) {
  var length = cardNumber.length;
  var substr1 = cardNumber.substr(0, 1);
  var substr2 = cardNumber.substr(0, 2);
  var substr3 = cardNumber.substr(0, 3);
  var substr4 = cardNumber.substr(0, 4);
  if (length === 14 && (substr2 === '38' || substr2 === '39')) {
  	return 'Diner\'s Club';
  }
  if (length === 15 && (substr2 === '34' || substr2 === '37')) {
  	return 'American Express';
  }
  if ((length === 13 || length === 16 || length === 19) && substr1 === '4') {
  	return 'Visa';
  }
  if (length === 16 && (substr2 === '51' || substr2 === '52' || substr2 === '53' || substr2 === '54' || substr2 === '55')) {
  	return 'MasterCard';
  }
  if ((length === 16 || length === 19) && (substr4 === '6011' || substr3 === '644' || substr3 === '645' || substr3 === '646' || substr3 === '647' || substr3 === '648' || substr3 === '649' || substr2 === '65'))
  	return 'Discover';
  if ((length === 12 || length === 13 || length === 14 || length === 15 || length === 16 || length === 17 || length === 18 || length === 19) && (substr4 === '5018' || substr4 === '5020' || substr4 === '5038' || substr4 === '6304')) {
    return 'Maestro';
  }
};