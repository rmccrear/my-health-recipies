
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

function renderNavInfo() {
  let userNameNavItem = document.getElementById("user-name")
  let emailNavItem = document.getElementById("user-email")

  // Step 1: retrieve data from localStorage
  let myEmail = localStorage.getItem("email");
  let myName = localStorage.getItem("fullName");
  console.log(myName, myEmail);

  // Step 2: put data into the DOM
  userNameNavItem.textContent = myName;
  emailNavItem.textContent = myEmail;
}

// Show the saved data when page loads.
renderNavInfo();
