export const spredNumberAndGiveMass = (number) => {
  let arr = [];
  for (let counter = 1; counter < number; ++counter) {
    arr[counter-1] = counter;
  }
  arr[number-1] = number;
  return arr;
}