var $noteTitle = $("#username");
var $noteText = $("#review");
var $newNoteBtn = $("#submitBtn");

// activeNote is used to keep track of the note in the textarea
var activeNote = {};

// A function for getting all notes from the db
var getNotes = function() {
  return $.ajax({
    url: "/api/notes",
    method: "GET"
  });
};

// A function for saving a note to the db
var saveNote = function(note) {
  return $.ajax({
    url: "/api/notes",
    data: note,
    method: "POST"
  });
};


// Get the note data from the inputs, save it to the db and update the view
var handleNoteSave = function() {
  var newNote = {
    title: $noteTitle.val(),
    text: $noteText.val()
  };

  saveNote(newNote).then(function(data) {
    getAndRenderNotes();
    renderActiveNote();
  });
};

// Sets the activeNote to and empty object and allows the user to enter a new note
var handleNewNoteView = function() {
  activeNote = {};
  renderActiveNote();
};


// If a note's title or text are empty, hide the save button
// Or else show it
var handleRenderSaveBtn = function() {
  if (!$noteTitle.val().trim() || !$noteText.val().trim()) {
    $newNoteBtn.hide();
  } else {
    $newNoteBtn.show();
  }
};

// Render's the list of note titles
var renderNoteList = function(notes) {
  $noteList.empty();

  var noteListItems = [];

  for (var i = 0; i < notes.length; i++) {
    var note = notes[i];

    var div = $("<div class='row'>");
    var newDiv = $("<div class='col-md-2'>");
    var img = $("<img src='https://image.ibb.co/jw55Ex/def_face.jpg' class='img img-rounded img-fluid'/>")
    var divv = $("<div class='col-md-10'>")
    var ptag = $("<p>")
    var atag = $('<a class="float-left" href="#"><strong>Other User</strong></a>')
    var ddiv = $('<div class="clearfix">')
    
    div.append(newDiv)
    newDiv.append(img)
    div.append(divv)
    divv.append(ptag)
    ptag.append(atag)
    divv.append(ddiv)
    ddiv.append(ptag)

    noteListItems.push(div);
  }

  $noteList.append(noteListItems);
};

// Gets notes from the db and renders them to the sidebar
var getAndRenderNotes = function() {
  return getNotes().then(function(data) {
    renderNoteList(data);
  });
};

$newNoteBtn.on("click", handleNewNoteView);
$noteTitle.on("keyup", handleRenderSaveBtn);
$noteText.on("keyup", handleRenderSaveBtn);

// Gets and renders the initial list of notes
getAndRenderNotes();