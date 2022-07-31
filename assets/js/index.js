let input = document.querySelector("#newsletter");
let button = document.querySelector("#newsletter__btn");
let span = document.querySelector("#newsletter__span");

function validaEmail(email) {
  console.log(email);
  if (email.length === 0) {
    span.style.display = "inline-block";
    return false;
  } else if (email.indexOf("@") === -1) {
    span.style.display = "inline-block";
    return false;
  } else if (email.indexOf(".") === -1) {
    span.style.display = "inline-block";
    return false;
  }
}

button.addEventListener("click", (e) => {
  if (validaEmail(input.value) === false) {
    e.preventDefault();
  }
});
