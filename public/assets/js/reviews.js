const $username = $("#username").val();
const $reviewBody = $("textarea#reviewBody").val();
const $userReviewBtn = $("#userReviewBtn");
const $rating = $("input[name='stars']").val();


$userReviewBtn.on("click", function(){
  let path = window.location.pathname.split('/');
  let posteeId = path[path.length-1];
  let newReview = { body: $reviewBody, rating: $rating, posterEmail: $username, userId: posteeId}
  console.log(newReview);
  
})