function removeOdd(n) {
  let array = [];

  for (i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      array.push(i);
    }
  }

  return array;
}

console.log(removeOdd(10));
