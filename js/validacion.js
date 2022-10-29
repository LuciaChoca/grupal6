(function () {
    'use strict'
  
    var form = document.getElementById("form")

        form.addEventListener('submit', function (event) {
            
            checkbox();

          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
          if (form.checkValidity() && checkbox()) {
            alert("Formulario Validado")
          }
        }, false)
      })
    ();

  function checkPass2() {
    pass1 = document.getElementById("password1");
    pass2 = document.getElementById("password2");

    if (pass1.value == pass2.value) {
        pass2.setCustomValidity("")
    } else {
        pass2.setCustomValidity("error")
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
  };