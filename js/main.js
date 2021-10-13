function getRandomNumber(min, max) {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

getRandomNumber(3, 15);


function checkStringLength (string, length) {
  return string.length <= length;
}

checkStringLength (5, 120);
