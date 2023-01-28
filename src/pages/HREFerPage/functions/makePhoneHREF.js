const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export default function makePhoneHREF(number) {

  let numArr = number.split('');

  let filteredNumArr = numArr.filter(item => digits.includes(item));
  let newNums = filteredNumArr.join('');

  return '<a href="tel:+1' + newNums + '">' + number + '</a';
}