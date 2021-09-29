function getRandomNumber(min, max) {
  const random = min + Math.random() * (max - min);
  return Math.round(random);
}

getRandomNumber(3, 15);


function checkCommentLength (string, lenght) {
  if (string.length <= lenght) {
    return true;
  }
}

checkCommentLength (5, 120);
