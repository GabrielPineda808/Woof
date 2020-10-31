$(document).ready(function() {
  let nextBtn = $("#nextBtn");
  let prevBtn = $("#prevBtn");
  let userForm = $("#userForm");
  let dogForm = $("#dogForm");
  let formProgress = $("#progress");

  nextBtn.on("click", nextForm);
  prevBtn.on("click", prevForm);

  function nextForm(e) {
    e.preventDefault();
    userForm.fadeOut('slow', 0, () => {
      dogForm.fadeIn('fast', 0);
    });
    formProgress.css('width', '100%');
  }

  function prevForm(e) {
    e.preventDefault();
    dogForm.fadeOut('slow', 0, () => {
      userForm.fadeIn('fast', 0);
    })
    formProgress.css('width', '50%');
  }


})