function validateLogin(username, password) {
  if (username === "" || password === "") {
    return "Username and password are required.";
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
