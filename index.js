function formSubmit(event) {
  const firstSGPA = document.sgpaCal.first_sgpa_value.value;
  const secondSGPA = document.sgpaCal.second_sgpa_value.value;
  const name = document.sgpaCal.Name.value;
  const avgCgpa = (parseFloat(firstSGPA) + parseFloat(secondSGPA)) / 2;
  const semPercentage = avgCgpa * 10 - 5;
  if (semPercentage > 100) {
    alert(
      `WARNING: প্রিয় ${name}, আপনার percentage হলো ${semPercentage.toFixed(
        2
      )}। আপনার শতাংশ 100-এর বেশি হওয়া উচিত নয়। অনুগ্রহ করে আপনি যে SGPA দিয়েছেন তা যাচাই করুন।`
    );
  } else {
    alert(`Dear ${name}, your percentage is ${semPercentage.toFixed(2)}`);
  }
}
