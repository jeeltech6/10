import React, { useState } from 'react';

const CreateNote = ({ onAdd }) => {
  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  };

  const submitNote = (e) => {
    e.preventDefault();
    if (note.title.trim() || note.content.trim()) {
      onAdd(note);
      setNote({
        title: '',
        content: ''
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <form onSubmit={submitNote}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:border-yellow-400"
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          value={note.content}
          onChange={handleChange}
          rows="3"
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:border-yellow-400"
        />
        <button
          type="submit"
          className="bg-yellow-400 text-gray-800 px-4 py-2 rounded hover:bg-yellow-500 transition-colors"
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
