function split(kalimat) {
  let word = "";
  let result = [];

  for (i = 0; i <= kalimat.length - 1; i++) {
    if (kalimat[i] != " ") {
      word = word + kalimat[i];
    } else {
      result.push(word);
      word = "";
    }
  }

  if (word != "") {
    result.push(word);
  }

  return result;
}

console.log(split("aku ngoding"));
