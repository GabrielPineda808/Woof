

$(document).ready(function() {
  let $nextBtn = $("#nextBtn");
  let $prevBtn = $("#prevBtn");
  let $userForm = $("#userForm");
  let $dogForm = $("#dogForm");
  let $formProgress = $("#progress");
  let $submitFormBtn = $("#submitFormBtn");
  let $signUpClose = $("#signUpClose");

  $signUpClose.on("click", () => {
    let $alertField = $(".alert");
    $alertField.hide();
  })

  $nextBtn.on("click", nextForm);
  $prevBtn.on("click", prevForm);
  // $submitFormBtn.on("click", submitForm);

  function nextForm(e) {
    // e.preventDefault();
    let $userName = $("#userForm input[name='uName']").val().trim();
    let $userEmail = $("#userForm input[name='email']").val().trim();
    let $password = $("#userForm input[name='password']").val();
    let $confirmPassword = $("#userForm input[name='confirmPassword']").val();
    let $userGender = $("#userForm :input:checked").val();

    if (!$userName || !$userEmail || !$password || !$confirmPassword || !$userGender) {
      let $noBlanksAlert = $("#noBlanks");
      $noBlanksAlert.show();
    } else {
      $userForm.fadeOut('slow', 0, () => {
        $dogForm.fadeIn('fast', 0);
      });
      $formProgress.css('width', '100%');
    }
  }

  function prevForm(e) {
    e.preventDefault();
    $dogForm.fadeOut('slow', 0, () => {
      $userForm.fadeIn('fast', 0);
    })
    $formProgress.css('width', '50%');
  }
})