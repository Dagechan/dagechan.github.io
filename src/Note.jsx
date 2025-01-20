import React from "react";
import { Link } from "react-router-dom";

function Note() {
  const notes = [
    { id: "note1", title: "My First Note" },
    { id: "note2", title: "My Second Note" },
  ];

  return (
    <div className="note animate" style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>Note</h1>
      <p>Select a note to view:</p>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link to={`/note/${note.id}`}>{note.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Note;
