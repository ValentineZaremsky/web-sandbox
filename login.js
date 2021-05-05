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

  if (value === "") {
    document.getElementById('loginError').style.display = "inline";
    return false;
  } else {
    document.getElementById('loginError').style.display = "none";
    return true;
  }
}

function checkPassword() {
  let value = document.getElementById('inputPassword').value;

  if (value === "") {
    document.getElementById('passwordError').style.display = "inline";
    return false;
  } else {
    document.getElementById('passwordError').style.display = "none";
    return true;
  }
}
