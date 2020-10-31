

$(document).ready(function() {
  let $nextBtn = $("#nextBtn");
  let $prevBtn = $("#prevBtn");
  let $userForm = $("#userForm");
  let $dogForm = $("#dogForm");
  let $formProgress = $("#progress");
  let $submitFormBtn = $("#submitFormBtn");

  $nextBtn.on("click", nextForm);
  $prevBtn.on("click", prevForm);
  // $submitFormBtn.on("click", submitForm);

  function nextForm(e) {
    e.preventDefault();

    $userForm.fadeOut('slow', 0, () => {
      $dogForm.fadeIn('fast', 0);
    });
    $formProgress.css('width', '100%');

    // let userName = $("#userForm input[name='name']");
    // let userEmail = $("#userForm input[name='email']");
    // let password = $("#userForm input[name='password']");
    // let confirmPassword = $("#userForm input[name='confirmPassword']");
    // let userGender = $("#userForm :input:checked");

    // let userFormArr = [userName, userEmail, password, confirmPassword];

    // userFormArr.forEach(elem => {
    //   if (!elem.val()) {
    //     elem.addClass('inputValid');
    //   }
    // })
    // console.log(genderRadio);
    // if (genderRadio.length === 0) {
    //   let $userRadioValid = $(".userRadioValid");
    //   $userRadioValid.css('display', 'inline-block')
    // } else {

    // };
  }

  function prevForm(e) {
    e.preventDefault();
    $dogForm.fadeOut('slow', 0, () => {
      $userForm.fadeIn('fast', 0);
    })
    $formProgress.css('width', '50%');
  }
})