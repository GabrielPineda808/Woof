const $userReviewBtn = $("#userReviewBtn");
const $dogSubmitBtn = $("#dogSubmitBtn");
const $dogName = $("select[name='dogName']").val();
const $dates = $("input[name='dates']").val();
const $dogBody = $("input[name='dogBody']").val();
const $dStars = $("input[name='dStars']").val();

$dogSubmitBtn.on("click", function() {
  const dogReview = {
    name: $dogName,
    dates: $dates,
    body: $dogBody,
    rating: $dStars
  }

  $.ajax({
    method: "POST",
    url: "/api/review/dog",
    data: dogReview
  }).then(res => {
    location.reload();
  })
});

$userReviewBtn.on("click", function() {
  let path = window.location.pathname.split('/');
  let posteeId = path[path.length-1];
  let newReview = { body: $reviewBody, rating: $rating, posterEmail: $username, userId: posteeId}
  console.log(newReview);
  
});