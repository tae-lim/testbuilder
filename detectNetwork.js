var detectNetwork = function(cardNumber) {
  var length = cardNumber.length;
  var prefix1 = cardNumber.substr(0, 1);
  var prefix2 = cardNumber.substr(0, 2);
  var prefix3 = cardNumber.substr(0, 3);
  var prefix4 = cardNumber.substr(0, 4);
  if (length === 14 && (prefix2 === '38' || prefix2 === '39')) {
  	return 'Diner\'s Club';
  }
  if (length === 15 && (prefix2 === '34' || prefix2 === '37')) {
  	return 'American Express';
  }
  if ((length === 13 || length === 16 || length === 19) && prefix1 === '4') {
  	return 'Visa';
  }
  if (length === 16 && (prefix2 === '51' || prefix2 === '52' || prefix2 === '53' || prefix2 === '54' || prefix2 === '55')) {
  	return 'MasterCard';
  }
  if ((length === 16 || length === 19) && (prefix4 === '6011' || prefix3 === '644' || prefix3 === '645' || prefix3 === '646' || prefix3 === '647' || prefix3 === '648' || prefix3 === '649' || prefix2 === '65')) {
  	return 'Discover';
  }
  if ((length >= 12 && length <= 19) && (prefix4 === '5018' || prefix4 === '5020' || prefix4 === '5038' || prefix4 === '6304')) {
    return 'Maestro';
  }
};