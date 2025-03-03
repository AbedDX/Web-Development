import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { noteApp_backend } from "../../../declarations/noteApp_backend";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [notes, setNotes] = useState([]);

  async function addNote(newNote) {
    const noteId = uuidv4();
    // Call the backend to create the note first
    await noteApp_backend.createNote(noteId, newNote.title, newNote.content);
    // Then update the local state
    setNotes(prevNotes => [{ id: noteId, ...newNote }, ...prevNotes]);
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const notesArray = await noteApp_backend.readNotes();
    // Use the note objects as they come from the backend (which include the ID)
    setNotes(notesArray);
  }  

  async function deleteNote(id) {
    await noteApp_backend.removeNote(id);
    setNotes(prevNotes => prevNotes.filter(noteItem => noteItem.id !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map(noteItem => (
        <Note
          key={noteItem.id}
          id={noteItem.id}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
