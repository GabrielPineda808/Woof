// get profile compare to logged in user
// if equals to eachother then hide certain elements visa versa
// make email in id home for profile
// get request for email on profile page
// access through session memory req.user.email
// check with what you got from profile page
// hide corresponding elemements




//method 2 preferable
// if no req param after /user then you're viewing your own profile
// if req.params = :userid then you're viewing someone else's profile
// build profile on display using either id or 

function checkUser(req, res, next) {
    const { email , name , gender, bio } = req.user;
    return [email , name , gender, bio];
}


module.exports = { checkUser }