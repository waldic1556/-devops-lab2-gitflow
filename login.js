function validateLogin(username, password) {
  if (username.trim() === "" || password.trim() === "") {
    return "Username and password are required.";
  }
  if (password.length < 8) {
    return "Password must be at least 8 characters long.";
  }
  return null;
}

document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var message = document.getElementById("message");

  var error = validateLogin(username, password);
  message.textContent = error ? error : "Logged in as " + username;
});
