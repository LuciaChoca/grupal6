(function () {
  "use strict";
  let forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener("submit", function (event) {
            if (!form.checkValidity()){
              event.preventDefault()
              event.stopPropagation();
            }
            form.classList.add("was-validated");
            if (checkPass() && form.checkValidity() && checkbox()) {
              console.log("formulario validado")
            }

      },
      false
    );
  });
})();

function checkPass(){
  const pass1 = document.getElementById("password1");
  const valorpass = document.getElementById("password1").value.length;
  const pass2 = document.getElementById("password2");
  if (valorpass > 6) {
    pass1.classList.remove("form-novalido");
    pass1.classList.add("form-valido");
  } else {
    pass1.classList.remove("form-valido");
    pass1.classList.add("form-novalido");
  }
  return pass1.value == pass2.value
}

function passIguales(){
  const pass2 = document.getElementById("password2");
  if (!checkPass()){
    pass2.classList.remove("form-valido");
    pass2.classList.add("form-novalido");
  } else {
    pass2.classList.remove("form-novalido");
    pass2.classList.add("form-valido");
  }
}

function checkbox (){
  let checkbox = document.getElementById("terminos");
  if (!checkbox.checked) {
    checkbox.classList.add("form-check-input-valid");
  }
checkbox.checked;
}
