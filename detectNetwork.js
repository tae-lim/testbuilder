var detectNetwork = function(cardNumber) {
  
  var length = cardNumber.length;
  var prefix1 = cardNumber.substr(0, 1);
  var prefix2 = cardNumber.substr(0, 2);
  var prefix3 = cardNumber.substr(0, 3);
  var prefix4 = cardNumber.substr(0, 4);
  var prefix6 = cardNumber.substr(0, 6);

  if (length === 14 && (prefix2 === '38' || prefix2 === '39')) {
  	return 'Diner\'s Club';
  }
  if (length === 15 && (prefix2 === '34' || prefix2 === '37')) {
  	return 'American Express';
  }
  if ((length === 13 || length === 16 || length === 19) && prefix1 === '4') {
  	return 'Visa';
  }
  if (length === 16 && (prefix2 >= '51' && prefix2 <= '55')) {
  	return 'MasterCard';
  }
  if ((length === 16 || length === 19) && (prefix4 === '6011' || (prefix3 >= '644' && prefix3 <= '649') || prefix2 === '65')) {
  	return 'Discover';
  }
  if ((length >= 12 && length <= 19) && (prefix4 === '5018' || prefix4 === '5020' || prefix4 === '5038' || prefix4 === '6304')) {
    return 'Maestro';
  }
  if ((length >= 16 && length <= 19) && ((prefix6 >= '622126' && prefix2 <= '622925') || (prefix3 >= '624' && prefix3 <= '626') || (prefix4 >= '6282' || prefix4 <= '6288'))) {
  	return 'China UnionPay'
  }
};