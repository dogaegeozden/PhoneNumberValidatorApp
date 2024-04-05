const clearBtn = document.querySelector("#clear-btn");

const resultsDiv = document.querySelector("#results-div");

const checkBtn = document.querySelector("#check-btn");

const usPhoneRegex = /^1?\s?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;

clearBtn.addEventListener("click", clearTheInput);

checkBtn.addEventListener("click", validatePhoneNumber);

function clearTheInput() {
  
  resultsDiv.innerHTML = "";

}

function validatePhoneNumber(event) {

  event.preventDefault(); // Prevent form submission

  const phoneNumberInput = document.querySelector("#user-input");
  
  const phoneNumber = phoneNumberInput.value.trim();
  
  const isValid = usPhoneRegex.test(phoneNumber);
  
  if (!phoneNumber) {

    alert("Please provide a phone number")
  
  } else {

    if (isValid) {

      resultsDiv.textContent = "Valid US number: " + phoneNumber;

    } else {
    
      resultsDiv.textContent = "Invalid US number: " + phoneNumber;
  
    }

  }

}
