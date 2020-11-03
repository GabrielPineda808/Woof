const e = require("express");

const $userReviewBtn = $("#userReviewBtn");


$userReviewBtn.on("click", function() {
  let path = window.location.pathname.split('/');
  let posteeId = path[path.length-1];
  let newReview = { body: $reviewBody, rating: $rating, posterEmail: $username, userId: posteeId}
  console.log(newReview);
  
});