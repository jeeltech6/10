import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Note from './components/Note';
import CreateNote from './components/CreateNote';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes(prevNotes => [...prevNotes, { ...newNote, id: Date.now() }]);
  };

  const deleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <CreateNote onAdd={addNote} />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {notes.map(note => (
            <Note
              key={note.id}
              title={note.title}
              content={note.content}
              onDelete={() => deleteNote(note.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
