

$(document).ready(function() {
  let $nextBtn = $("#nextBtn");
  let $prevBtn = $("#prevBtn");
  let $userForm = $("#userForm");
  let $dogForm = $("#dogForm");
  let $formProgress = $("#progress");
  let $close = $(".close");

  $close.on("click", function() {
    $(this).parent().hide();
  })

  $nextBtn.on("click", nextForm);
  $prevBtn.on("click", prevForm);

  function nextForm() {
    let $userName = $("#userForm input[name='uName']").val().trim();
    let $userEmail = $("#userForm input[name='email']").val().trim();
    let $password = $("#userForm input[name='password']").val();
    let $confirmPassword = $("#userForm input[name='confirmPassword']").val();
    let $userGender = $("#userForm :input:checked").val();

    if (!$userName || !$userEmail || !$password || !$confirmPassword || !$userGender) {
      let $noBlanksAlert = $("#noBlanks");
      $noBlanksAlert.show();
    } else if (!passwordMatch($password, $confirmPassword)) {
      let $passwordMatch = $("#passwordMatch");
      $passwordMatch.show();
    } else if (!passwordRegex($password)) {
      let $passwordRegx = $("#passwordRegx");
      $passwordRegx.show();
    } else {
      $userForm.fadeOut('slow', 0, () => {
        $dogForm.fadeIn('fast', 0);
      });
      $formProgress.css('width', '100%');
    }
  }

  function prevForm() {
    $dogForm.fadeOut('slow', 0, () => {
      $userForm.fadeIn('fast', 0);
    })
    $formProgress.css('width', '50%');
  }

  function passwordMatch(password, confirmPassword) {
    return password === confirmPassword;
  }

  function passwordRegex(password) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/
    return regex.test(password);
  }
})