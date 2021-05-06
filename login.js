console.log("Hello!");

function showLogin() {
  console.log("Log in please!");
  document.getElementById('auth-window').style.display = 'block';
}

function submitLogin() {
  if ( checkLogin() && checkPassword() ) {
    document.getElementById('auth-window').style.display = 'none';
    console.log("You are logged in.");
    console.log("Login: ", document.getElementById('inputLogin').value);
    console.log("Password: ", document.getElementById('inputPassword').value);
    console.log("Thank You!");
  }
}

function checkLogin() {
  let value = document.getElementById('inputLogin').value;
  let elem = document.getElementById('loginError');
  let isOk, message;

  if (value === "") {
    message = "Empty login";
    isOk = false;
  } else if (!validateEmail(value)) {
    message = "Wrong email";
    isOk = false;
  } else {
    message = "All right";
    isOk = true;
  }

  elem.textContent = message;
  elem.style.display = isOk ? "none" : "inline";

  return isOk;
}

function checkPassword() {
  let value = document.getElementById('inputPassword').value;
  let elem = document.getElementById('passwordError');
  let isOk, message;

  if (value === "") {
    message = "Empty password";
    isOk = false;
  } else {
    message = "All right";
    isOk = true;
  }

  elem.textContent = message;
  elem.style.display = isOk ? "none" : "inline";

  return isOk;
}

function validateEmail(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}
