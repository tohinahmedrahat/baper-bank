// add function to input field value to html

function getInputValue(inputField) {
  const inputFieldText = document.getElementById(inputField);
  const inputFieldValue = inputFieldText.value;
  const value = parseFloat(inputFieldValue);
  inputFieldText.value = "";
  return value;
}

function getTextFieldValue(textField) {
  const inputField = document.getElementById(textField);
  const inputFieldValue = inputField.innerText;
  const value = parseFloat(inputFieldValue);
  return value;
}

function setValue(id, value) {
  const balanceField = document.getElementById(id);
  balanceField.innerText = value;
}
// add event handeler to deposit button
const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function () {
  const depositInputValue = getInputValue("deposit-field");
  const depositFieldValue = getTextFieldValue("deposit-amount");
  const balanceField = getTextFieldValue("total-amount");
  if (isNaN(depositInputValue)) {
    alert("input valid number");
  } else {
    const depositTotal = depositInputValue + depositFieldValue;
    setValue("deposit-amount", depositTotal);
    const balancetotal = balanceField + depositInputValue;
    setValue("total-amount", balancetotal);
  }
});

// add event handeler to withdraw button
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function () {
  const withdrawInputValue = getInputValue("withdraw-field");
  const withdrawFieldValue = getTextFieldValue("withdraw-amount");
  const balanceField = getTextFieldValue("total-amount");
  if (isNaN(withdrawInputValue)) {
    alert("please valid input number");
  } else {
    const withdrawTotal = withdrawInputValue + withdrawFieldValue;
    const balancetotal = balanceField - withdrawInputValue;
    setValue("withdraw-amount", withdrawTotal);
    setValue("total-amount", balancetotal);
  }
});


