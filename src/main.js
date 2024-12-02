const helper = (value) => document.getElementById(value);
const password = helper("password");
const showPassword = helper("show-password");

const passwordType = {
  password: "password",
  text: "text",
};

const togglePassword = () => {
  password.type =
    password.type === passwordType.password
      ? passwordType.text
      : passwordType.password;
};

showPassword.addEventListener("click", togglePassword);
