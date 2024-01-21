
function checkpassword(form) {
  password1 = form.password.value;
  password2 = form.password_confirm.value;

  password_empty = document.getElementById("password_empty");
  password_confirm_empty = document.getElementById("password_confirm_empty");
  mismatch = document.getElementById("password_mismatch");

  password_input = document.getElementById("password");
  password_confirm_input = document.getElementById("password_confirm");

  if (password_empty.style.display == "block") {
    password_input.style.border = "1px solid rgb(216, 215, 215)";
    password_empty.style.display = "none";
  }
  else if (password_confirm_empty.style.display == "block") {
    password_confirm_input.style.border = "1px solid rgb(216, 215, 215)";
    password_confirm_empty.style.display = "none";
  }
  else if (mismatch.style.display == "block") {
    password_input.style.border = "1px solid rgb(216, 215, 215)";
    password_confirm_input.style.border = "1px solid rgb(216, 215, 215)";
    mismatch.style.display = "none";
  }

  if (password1 == "") {
    password_input.style.border = "1px solid red";
    password_empty.style.display = "block";
  }
  else if (password2 == "") {
    password_confirm_input.style.border = "1px solid red";
    password_confirm_empty.style.display = "block";
  }
  else if (password1 != password2) {
    password_input.style.border = "1px solid red";
    password_confirm_input.style.border = "1px solid red";
    mismatch.style.display = "block";
  }
  else {
    return true
  }
  return false
}