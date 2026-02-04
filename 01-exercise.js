function triangle(n) {
  let array = [];
  let num = 1;

  for (i = 1; i <= n; i++) {
    let row = [];

    for (j = 1; j <= i; j++) {
      row.push(num);
      num++;
    }
    array.push(row);
  }
  return array;
}

console.log(triangle(4));
