import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function NoteViewer() {
  const { noteId } = useParams(); // Get note ID from URL
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/${noteId}.md`) // Load the Markdown file dynamically
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch(() => setContent("# Not Found\nThis note does not exist."));
  }, [noteId]);

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default NoteViewer;
