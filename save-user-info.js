
let emailInput = document.getElementById("email-input");
let fullNameInput = document.getElementById("full-name-input");
let saveButton = document.getElementById("save-button");

function handleSaveData() {
  // Step 1: get data from user
  let fullName = fullNameInput.value;
  let email = emailInput.value;

  console.log(fullName, email);

  // Step 2: save to localStorage
  localStorage.setItem("fullName", fullName);
  localStorage.setItem("email", email);

  // Step 3: retrieve from localStorage
  // Step 4: put in DOM
  renderNavInfo();
}

saveButton.addEventListener("click", handleSaveData);
