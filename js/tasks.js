'use strict';

function dataValidation() {
  var forms = document.getElementsByClassName('needs-validation');
  var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
}

function clearingForms() { 
  $('.modal').on('hidden.bs.modal', function(event) {
    $(this).find("input,textarea,select").val('').end();
    $(this).find("form").removeClass('was-validated');
  });
}

$(document).ready(function() {
  clearingForms();
  window.addEventListener('load', dataValidation, false);
});