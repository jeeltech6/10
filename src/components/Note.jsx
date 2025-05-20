import React from 'react';

const Note = ({ title, content, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{content}</p>
      <button
        onClick={onDelete}
        className="text-red-500 hover:text-red-700 transition-colors"
      >
        Delete
      </button>
    </div>
  );
};

export default Note;
