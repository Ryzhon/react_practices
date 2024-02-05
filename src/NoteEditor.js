import React, { useState } from 'react';

const NoteEditor = ({ note, saveNote, deleteNote }) => {
  const [editContent, setEditContent] = useState(note.content);

  const handleSave = () => {
    saveNote(note.id, editContent);
  };

  return (
    <div className="note-editor">
      <textarea value={editContent} onChange={(e) => setEditContent(e.target.value)} />
      <div className="editor-buttons">
        <button onClick={handleSave} className="save">
          保存
        </button>
        <button onClick={() => deleteNote(note.id)} className="delete">
          削除
        </button>
      </div>
    </div>
  );
};

export default NoteEditor;
