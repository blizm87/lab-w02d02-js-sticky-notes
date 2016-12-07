 // JavaScript goes here
var addText = function (){
  var sNoteText = window.prompt('Enter your text here:');
  var newContent = document.createTextNode(sNoteText);
  sNote.appendChild(newContent);
}

var createNote = function(){
  if(noteButton.value === 'Add a new note'){
    sNote = document.createElement('div');
    sNote.setAttribute('class','sNote');
    main.appendChild(sNote);
    noteCounter.value = document.querySelectorAll('.sNote').length;
    sNote.addEventListener('click',addText);

  }
}
var sNote;
var noteCounter = document.querySelector('input');
var noteButton = document.querySelectorAll('input')[1];
var main = document.querySelector('#main');
var form = document.querySelector('form');
form.addEventListener('click', createNote);


