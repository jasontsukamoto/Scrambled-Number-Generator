function generate(number) {
  if(typeof number !== 'number') return false;

  var array = [];
  var randomArray = [];

  for (var i = 0; i < number; i++) {
    array.push(i);
  }

  var length = array.length;
  for(var k = 0; k < length; k++){
    var index = (Math.floor((Math.random() * array.length)));
    randomArray.push(array[index]);
    array.splice(index,1);
  }
  return randomArray;
 }


module.exports = {
  generate : generate
}