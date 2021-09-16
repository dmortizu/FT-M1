function BinarioADecimal(num) {
  // tu codigo aca
  var resultado=0;
  var numero = num.split('').reverse();
  for(var i=0; i<numero.length; i++){
    resultado += (numero[i]*Math.pow(2,i));
  }
  return resultado;

}

function DecimalABinario(num) {
  // tu codigo aca
  if(num <= 0) return '0';
  var array = [];

  while(num > 0) {
    array.unshift(num % 2);
    num = Math.floor(num / 2);
  }
  return array.join('');

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}