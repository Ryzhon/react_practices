import React, { useState } from 'react';
import './App.css';
import NoteEditor from './NoteEditor';

const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  const [activeNote, setActiveNote] = useState(null);

  const setUpdatedNotes = (updatedNotes) => {
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const createNewNote = () => {
    const newNote = {
      id: Date.now(),
      content: '新規メモ',
    };
    const updatedNotes = [newNote, ...notes];
    setUpdatedNotes(updatedNotes);
    setActiveNote(newNote.id);
  };

  const saveNote = (id, content) => {
    const updatedNotes = notes.map((note) => (note.id === id ? { ...note, content } : note));
    setUpdatedNotes(updatedNotes);
    setActiveNote(null);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setUpdatedNotes(updatedNotes);
    setActiveNote(null);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <div className="app-container">
      <div className="note-list">
        {notes.map((note) => (
          <div
            key={note.id}
            className={`note ${note.id === activeNote ? 'active' : ''}`}
            onClick={() => setActiveNote(note.id)}
          >
            {note.content.split('\n')[0]}
          </div>
        ))}
        <button onClick={createNewNote} className="add-note">
          +
        </button>
      </div>
      {activeNote && <NoteEditor key={activeNote} note={getActiveNote()} saveNote={saveNote} deleteNote={deleteNote} />}
    </div>
  );
};

export default App;
