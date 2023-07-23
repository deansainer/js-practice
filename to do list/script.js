const inputElement = document.getElementById('inputElement')
const createBtn = document.getElementById('createBtn')
const deleteBtn = document.getElementById('deleteBtn')
const completedBtn = document.getElementById('completeBtn')
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
    if (notes.length === 0){
        listElement.innerHTML = '<h5>Nothing to do yet..</h5>'
    }
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
        return `<li class="list-group-item" data-index="${i}"><s>${note.title}</s><button id="deleteBtn" data-index="${i}" data-type="delete" style="margin-left: 200px" type="button" class="btn btn-danger">✕</button> <button id="completedBtn" data-index="${i}" data-type="complete" type="button" class="btn btn-info">✓</button></li>`
    }else{
        return `<li class="list-group-item" data-index="${i}">${note.title}<button id="deleteBtn" data-index="${i}" data-type="delete" style="margin-left: 200px" type="button" class="btn btn-danger">✕</button> <button id="completedBtn" data-index="${i}" data-type="complete" type="button" class="btn btn-info">✓</button></li>`
 
    }
}

listElement.onclick = function (event) {
    const index = Number(event.target.dataset.index)
    const type = event.target.dataset.type
    if(type === 'complete'){
        notes[index].completed = !notes[index].completed
    }
    else if(type === 'delete'){
        notes.splice(index, 1)
    }
    printNotes()
}

console.log(notes)