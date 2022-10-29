(function () {
  "use strict";
  let forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener("submit", function (event) {
      checkbox();
      pass2error();
            if (!form.checkValidity()){
              event.preventDefault()
              event.stopPropagation();
            }
            form.classList.add("was-validated");
            if (checkPass() && form.checkValidity() && checkbox()) {
              alert("Formulario Validado")
            }

      },
      false
    );
  });
})();

function checkPass(){
  const pass1 = document.getElementById("password1");
  const pass2 = document.getElementById("password2");

  if (pass1.value.length >= 6) {
    pass1.classList.remove("form-novalido");
    pass1.classList.add("form-valido");
    pass1.classList.remove("is-invalid");
    pass1.classList.add("is-valid");
  } else {
    pass1.classList.remove("form-valido");
    pass1.classList.add("form-novalido");
    pass1.classList.remove("is-valid");
    pass1.classList.add("is-invalid");
  }
  return pass1.value == pass2.value
}

function passIguales(){
  const pass2 = document.getElementById("password2");
  const pass1 = document.getElementById("password1");

  if (pass1.value == pass2.value && pass2.value.length >5 ){
    pass2.classList.remove("form-novalido");
    pass2.classList.add("form-valido");
    pass2.classList.remove("is-invalid");
    pass2.classList.add("is-valid");
    } else {

      pass2.classList.remove("form-valido");
      pass2.classList.add("form-novalido");
      pass2.classList.remove("is-valid");
      pass2.classList.add("is-invalid");
    }
  };

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

function pass2error() {
  const pass2 = document.getElementById("password2");
  if (!(pass2.classList.contains("form-valido"))){
    pass2.classList.add("form-novalido");
    pass2.classList.add("is-invalid");
  }

}