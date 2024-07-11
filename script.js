function addNote(){
    const noteInput = document.getElementById('noteInput');
    const noteList = document.getElementById('noteList');

    if(noteInput.value.trim() !== ""){
        const Newnote = document.createElement('li');
        Newnote.textContent = noteInput.value;
        noteList.appendChild(Newnote);
    }
    else{
        alert("Por favor, escriba una nota antes de agregar.");
    }
}
