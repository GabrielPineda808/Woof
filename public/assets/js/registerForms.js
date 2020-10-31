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
    userForm.fadeOut('fast', 0, then => {
      userForm.css('visibility', 'hidden');
      userForm.css('right', '45rem');
    });
    
    dogForm.css('left', 3rem)
    formProgress.css('width', '100%');
  }

  function prevForm(e) {
    e.preventDefault();
    console.log('hesitated');
  }


})