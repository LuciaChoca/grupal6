(function () {
  "use strict";
  let forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener("submit", function (event) {
      checkbox();
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
  const valorpass = document.getElementById("password1")
  const pass2 = document.getElementById("password2");
  if (valorpass.value.length >= 6) {
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
  let terminosLink = document.getElementById("terminosLink");
  let checkbox = document.getElementById("terminos");
  if (checkbox.checked) {
    checkbox.classList.remove("is-invalid");
    checkbox.classList.add("is-valid");
    terminosLink.classList.remove("is-invalid");
    terminosLink.classList.add("is-valid");
  }else{
    checkbox.classList.remove("is-valid");
    checkbox.classList.add("is-invalid");
    terminosLink.classList.remove("is-valid");
    terminosLink.classList.add("is-invalid");
  }
return checkbox.checked;
}
