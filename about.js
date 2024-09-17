console.log("hello from about")

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