module.exports = function(name, email, password, confirmPassword, checkUser) {
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