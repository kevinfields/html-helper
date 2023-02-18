export default function makeValidSubject(input) {

  let inputArr = input.split('');

  for (let i=0; i<inputArr.length; i++) {
    if (inputArr[i] === ' ') {
      inputArr[i] = '%20';
    }
  };

  return inputArr.join('');
}