(function () {
  "use strict";
  let forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener("submit", function (event) {
          if (checkPass() && !form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation();
          }
          form.classList.add("was-validated");
      },
      false
    );
  });
})();

function checkPass(){
  const pass1 = document.getElementById("password1");
  const pass2 = document.getElementById("password2");
      if (pass1.value != pass2.value) {
        console.log("no")
          return false;
      } else {
        console.log("si")
          return true;
      }
}

