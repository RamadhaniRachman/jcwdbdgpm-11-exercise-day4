function BMI(weight, height) {
  let bmi = weight / (height * height);
  let result;

  if (bmi < 18.5) {
    result = "less weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    result = "ideal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    result = "overweight";
  } else if (bmi >= 30 && bmi <= 39.9) {
    result = "very overweight";
  } else {
    result = "obesity";
  }
  return result;
}

console.log(BMI(50, 170));
