const inputElement = document.getElementById('inputElement')
const createBtn = document.getElementById('createBtn')
const deleteBtn = document.getElementById('deleteBtn')
const completedBtn = document.getElementById('completedBtn')
const listElement = document.getElementById('list')

notes = [
    {
        title: 'Wake up',
        completed: true,
    },

    {
        title: 'Go to work',
        completed: false,
    }
]

function printNotes(){
    listElement.innerHTML = ''
    for (i=0; i<notes.length; i++){
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
}
}
printNotes()

createBtn.onclick = function () {
    if (inputElement.value.length === 0){
        return
    }
    const newNote = {
        title: inputElement.value,
        completed: false,
    }

    notes.push(newNote)
    inputElement.value = ''
    printNotes()

}


function getNoteTemplate(note, i){
    if (note.completed == true){
        return `<li class="list-group-item" data-index="${i}"><s>${note.title}</s><button style="margin-left: 200px" type="button" class="btn btn-danger">✕</button> <button id="completedBtn" type="button" class="btn btn-info">✓</button></li>`
    }else{
        return `<li class="list-group-item" data-index="${i}">${note.title}<button style="margin-left: 200px" type="button" class="btn btn-danger">✕</button> <button id="completedBtn" type="button" class="btn btn-info">✓</button></li>`
 
    }
}


console.log(notes)