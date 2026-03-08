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

// function handleChange(event) {
//   //   let nameValue = name.value;
//   let emailValue = event.value;
//   //   let passwordValue = password.value;
//   console.log(emailValue);
// }
