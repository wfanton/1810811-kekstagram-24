function getRandomNumber(min, max) {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

getRandomNumber(3, 15);


function checkCommentLength (string, lenght) {
  if (string.lenght <= lenght) {
    return true;
  }
}

checkCommentLength (5, 120);
