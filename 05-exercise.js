function split(kalimat) {
  let word = ""; // penampung sementara kata sebelum bertemu spasi
  let result = []; // penyimpanan akhir semua kata

  for (i = 0; i <= kalimat.length - 1; i++) {
    // kalau bukan spasi maka tambah ke word
    if (kalimat[i] != " ") {
      word = word + kalimat[i];
    }
    // kalau spasi maka word disimpan ke result
    else {
      result.push(word);
      word = ""; // reset word ke kosongan lg
    }
  }
  //apabila ada kalimat terakhir maka di push lg
  if (word != "") {
    result.push(word);
  }

  return result;
}

console.log(split("aku ngoding"));
