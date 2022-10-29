function formSubmit(event) {
  const firstSGPA = document.sgpaCal.first_sgpa_value.value;
  const secondSGPA = document.sgpaCal.second_sgpa_value.value;
  const name = document.sgpaCal.Name.value;
  const avgCgpa = (parseFloat(firstSGPA) + parseFloat(secondSGPA)) / 2;
  const semPercentage = avgCgpa * 10 - 5;
  alert(`Dear ${name}, your percentage is ${semPercentage.toFixed(2)}`);
}
