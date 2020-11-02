const $username = $("#username").val();
const $review = $("#review").val();
const $userReviewBtn = $("#userReviewBtn");
const $rating = $("input[name='stars']").val();
const $reviewList = $(" .list-group");

// // activereview is used to keep track of the note in the textarea
// var activereview = {};

// // A function for getting all notes from the db
// var getReview = function() {
//   return $.ajax({
//     url: "/api/notes",
//     method: "GET"
//   });
// };

// // A function for saving a note to the db
// var saveReview = function(note) {
//   return $.ajax({
//     url: "/api/notes",
//     data: note,
//     method: "POST"
//   });
// };


// // Get the note data from the inputs, save it to the db and update the view
// var handleReviewSave = function() {
//   var newNote = {
//     title: $Username.val(),
//     text: $review.val()
//   };

//   saveReview(newNote).then(function(data) {
//     getAndRenderReview();
//     renderActiveReview();
//   });
// };

// // Sets the activereview to and empty object and allows the user to enter a new note
// var handleNewReviewView = function() {
//   activereview = {};
//   renderActiveReview();
// };


// // If a note's title or text are empty, hide the save button
// // Or else show it
// var handleRenderSaveBtn = function() {
//   if (!$Username.val().trim() || !$review.val().trim()) {
//     $newReviewBtn.hide();
//   } else {
//     $newReviewBtn.show();
//   }
// };

// // Render's the list of note titles
// var renderReviewList = function(reviews) {
//   $reviewList.empty();

//   var reviewListItems = [];

//   for (var i = 0; i < reviews.length; i++) {
//     var review = reviews[i];

//     var li = $("<li>")
//     var div = $("<div class='row'>");
//     var newDiv = $("<div class='col-md-2'>");
//     var img = $("<img src='https://image.ibb.co/jw55Ex/def_face.jpg' class='img img-rounded img-fluid'/>")
//     var divv = $("<div class='col-md-10'>")
//     var ptag = $("<p>")
//     var atag = $('<a class="float-left" href="#"><strong>Other User</strong></a>')
//     var tagp = $("<p>").data(review)
//     var ddiv = $('<div class="clearfix">')
    
//     li.append(div)
//     div.append(newDiv)
//     newDiv.append(img)
//     div.append(divv)
//     divv.append(ptag)
//     ptag.append(atag)
//     divv.append(ddiv)
//     ddiv.append(tagp)

//     reviewListItems.push(li);
//   }

//   $reviewList.prepend(reviewListItems);
// };

// // Gets notes from the db and renders them to the sidebar
// var getAndRenderReview = function() {
//   return getReview().then(function(data) {
//     renderReviewList(data);
//   });
// };

// $newReviewBtn.on("click", handleNewReviewView);
// $Username.on("keyup", handleRenderSaveBtn);
// $review.on("keyup", handleRenderSaveBtn);

// // Gets and renders the initial list of notes
// getAndRenderReview();

$userReviewBtn.on("click", function(){
  let path = window.location.pathname.split('/');
  let posteeId = path[path.length-1];
  let newReview = { body: $review, rating: $rating, posterEmail: $username, userId: posteeId}
  console.log(newReview);
  
  // var review = $review.val()
  // var username = $Username.val()
  // var reviewListItems = [];

  // var li = $("<li>")
  // var div = $("<div class='row'>");
  // var newDiv = $("<div class='col-md-2'>");
  // var img = $("<img src='https://image.ibb.co/jw55Ex/def_face.jpg' class='img img-rounded img-fluid'/>")
  // var divv = $("<div class='col-md-10'>")
  // var ptag = $("<p>")
  // var atag = $('<a class="float-left" href="#"><strong>' + username +'</strong></a>')
  // var tagp = $("<p>").data(review)
  // var ddiv = $('<div class="clearfix">')
    
  // li.append(div)
  // div.append(newDiv)
  // newDiv.append(img)
  // div.append(divv)
  // divv.append(ptag)
  // ptag.append(atag)
  // divv.append(ddiv)
  // ddiv.append(tagp)

  // reviewListItems.push(li);

  // $reviewList.prepend(reviewListItems);
})