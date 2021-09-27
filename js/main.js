function randomNumber(min, max) {
  const random = min + Math.random() * (max - min);
  return Math.round(random);
}

randomNumber(3, 15);


function commentCheck (string, lenght) {
  // eslint-disable-next-line no-undef
  if (commentLenght <= lenght) {
    return true;
  } else {
    return false;
  }
}

// eslint-disable-next-line no-undef
commentCheck (string, lenght);
