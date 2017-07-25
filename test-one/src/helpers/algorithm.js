const Algorithm = (number) => {
    if (number % 3 === 0 && number % 5 == 0)
      return 'BossHog';
    if (number % 3 === 0)
      return 'Boss';
    if (number % 5 === 0)
      return 'Hog';
    else return number;
}

module.exports = Algorithm;
