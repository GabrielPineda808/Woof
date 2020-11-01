

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
    if (userValidation()) {
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

  $("form").on("submit", function(e) {
    if (dogValidation()) {
      e.preventDefault();
    }
  })

  function userValidation() {
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
      return true;
    }
    return false
  }

  function passwordMatch(password, confirmPassword) {
    return password === confirmPassword;
  }

  function passwordRegex(password) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/
    return regex.test(password);
  }

  function dogValidation() {
    let $dogName = $("#dogForm input[name='dName']").val().trim();
    let $breed = $("#dogForm input[name='breed']").val().trim();
    let $age = $("#dogForm input[name='age']").val();
    let $temperament = $("#dogForm input[name='temperament']").val().trim();
    let $dogGender = $("#dogForm :input:checked").val();

    if (!$dogName || !$breed || !$age || !$temperament || !$dogGender) {
      let $noBlanksAlert = $("#noBlanksDogs");
      $noBlanksAlert.show();
    } else {
      return false
    }
    return true;
  }
})