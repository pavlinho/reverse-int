module.exports = function reverse (n) {
  let str = String(Math.abs(n));
  let mas = str.split('');
  mas.reverse();
  str = "";
  mas.forEach((el,i) => str += el);
  return parseInt(str);
}
