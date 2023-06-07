import Note from './components/notes/notes'
import './App.css'
import { data } from './components/notes/data'
import {AddNote} from './components/add-note/add-note'
import { useState } from 'react'
import {NoteType} from './components/notes/note-type'

function App() {
  const [notes, setNotes] = useState(data)
  const addNote = (note:NoteType) => {
    setNotes([note,...notes])
  }
  console.log('propscoming',<AddNote functionProperty ={addNote}/>)
  
  return (
    <div className='App'>
      <AddNote functionProperty = {addNote}/>
      {notes.map((note:NoteType, index) => <Note key={index}text={note.text} priority={note.priority} />)}

    </div>

  );
}

export default App;
