import React from 'react';

const Note = ({ note, activeNote, setActiveNote }) => {
  return (
    <div className={`note ${note.id === activeNote ? 'active' : ''}`} onClick={() => setActiveNote(note.id)}>
      {note.content.split('\n')[0]}
    </div>
  );
};

export default Note;
