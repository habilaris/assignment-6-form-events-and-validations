let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");

function handleSubmit(event) {
  event.preventDefault();
  let nameValue = name.value;
  let emailValue = email.value;
  let passwordValue = password.value;
  if (nameValue == "") {
    window.alert("Name Required");
  } else if (!emailValue.includes("@")) {
    window.alert("Invalid Email: Please include '@'");
  } else if (passwordValue.length < 6) {
    window.alert(
      "Invalid Password: Password must be atleast be 6 charaters long",
    );
  } else {
    window.alert("Form Submitted Successfully");
  }
}

let email_err_mssg = document.getElementById("email-error-mssg");
email.addEventListener("input", () => {
  let emailValue = email.value;
  if (!emailValue.includes("@")) {
    email_err_mssg.innerHTML =
      "<p class='text-red-400 text-xl mb-2'>Email must contain an '@'</p>";
    setTimeout(() => {
      email_err_mssg.innerHTML = "";
    }, 6000);
  } else {
    email_err_mssg.innerHTML =
      "<p class='text-green-500 text-xl mb-2'>Email is valid now!</p>";
    setTimeout(() => {
      email_err_mssg.innerHTML = "";
    }, 3000);
  }
});

let password_err_mssg = document.getElementById("password-error-mssg");
password.addEventListener("input", () => {
  let passwordValue = password.value;
  if (passwordValue.length < 6) {
    password_err_mssg.innerHTML =
      "<p class='text-red-400 text-xl mb-2'>Password must be 6 atleast characters long...</p>";
    setTimeout(() => {
      password_err_mssg.innerHTML = "";
    }, 6000);
  } else {
    password_err_mssg.innerHTML =
      "<p class='text-green-500 text-xl mb-2'>Password is valid now!</p>";
    setTimeout(() => {
      password_err_mssg.innerHTML = "";
    }, 3000);
  }
});

let reset_btn = document.getElementById("reset-btn");
reset_btn.addEventListener("click", (event) => {
  event.preventDefault();
  name.value = "";
  email.value = "";
  password.value = "";
});
