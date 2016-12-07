 // JavaScript goes here
var addText = function (){
  var newContent = document.createTextNode('p');
  sNote.appendChild(newContent);
}

var createNote = function(){
  if(event.target.value === 'Add a new note'){
    sNote = document.createElement('div');
    sNote.setAttribute('class','sNote');
    main.appendChild(sNote);
    input.value = document.querySelectorAll('.sNote').length;
    sNote.addEventListener('click',addText);

  }
}

var sNote;
var input = document.querySelector('input');
var main = document.querySelector('#main');
var form = document.querySelector('form');
form.addEventListener('click', createNote);


