$("#userEdit").on("click", function(){
    location.href= "/user/edit"
})

$("#editFormBtn").on("click", function(){
    console.log("clicked")
    let $userName = $("#username").val().trim();
    let $userEmail = $("#useremail").val().trim();
    let $bio = $("#userbio").val().trim();

    let editObj = {
        name : $userName,
        email: $userEmail,
        bio: $bio
    }

    $.ajax("/user/edit", {
        type: "PUT",
        data: editObj
      }).then(
        function() {
          location.assign("/user");
        }
      );
})