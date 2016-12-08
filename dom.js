 // JavaScript goes here
var createNote = function(){
  if(noteButton.value === 'Add a new note'){
    sNote = document.createElement('div');
    var sNoteText = document.createElement('p');
    var noteRemove = document.createElement('span');

    sNote.setAttribute('class','sNote');
    sNoteText.setAttribute('contenteditable',true);
    sNoteText.setAttribute('class','sNoteText');
    noteRemove.setAttribute('class','noteRemove');
    noteRemove.innerHTML = 'x';
    main.appendChild(sNote);
    sNote.appendChild(noteRemove);
    sNote.appendChild(sNoteText);
    noteCounter.value = document.querySelectorAll('.sNote').length;
    noteRemove.addEventListener('click', function(){
      this.parentNode.remove();
      noteCounter.value = document.querySelectorAll('.sNote').length;
    });

  }
}
var sNote;
var noteCounter = document.querySelector('input');
var noteButton = document.querySelectorAll('input')[1];
var main = document.querySelector('#main');
var form = document.querySelector('form');
form.addEventListener('click', createNote);


