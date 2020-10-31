$(document).ready(function() {
  let $nextBtn = $("#nextBtn");
  let $prevBtn = $("#prevBtn");
  let $userForm = $("#userForm");
  let $dogForm = $("#dogForm");
  let $formProgress = $("#progress");

  $nextBtn.on("click", nextForm);
  $prevBtn.on("click", prevForm);

  function nextForm(e) {
    e.preventDefault();

    $userForm.fadeOut('slow', 0, () => {
      $dogForm.fadeIn('fast', 0);
    });
    $formProgress.css('width', '100%');

    let userFormInputs = $("#userForm :input:checked")
    userFormVals = userFormInputs.each(function() {
      let elem = $(this);
      console.log(elem.val());
      
    })
  }

  function prevForm(e) {
    e.preventDefault();
    $dogForm.fadeOut('slow', 0, () => {
      $userForm.fadeIn('fast', 0);
    })
    $formProgress.css('width', '50%');

  }


  

  function userValidation(name, email, password, confirmPassword, checkUser) {
    let hbsObject = {
      errors: []
    }
  
    if (!name || !email || !password || !confirmPassword) {
      hbsObject.errors.push({message: 'Please enter all fields'});
    }
  
    if (password !== confirmPassword) {
      hbsObject.errors.push({message: 'Passwords do not match.'});
    }
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/
    if (!regex.test(password)) {
      hbsObject.errors.push({message: 'Password must be 6 characters long and include one of each of the following: lowercase letter, uppercase letter, number.'})
    }
  
    if (checkUser) {
      hbsObject.errors.push({ message: 'Account with that email already exists. Please login to access that account.'})
    }
  
    return hbsObject;
  }

})