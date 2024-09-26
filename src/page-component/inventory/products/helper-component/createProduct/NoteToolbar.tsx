import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill"; 
import "react-quill/dist/quill.snow.css"; 
import styled from "styled-components"; 

const QuillWrapper = styled.div`
  .ql-container {
    border: 1px solid #ccc; 
    font-size: 16px;
    resize: vertical; 
    width: 83%;
    min-height: 220px; 
    max-height: 500px; 
    overflow-y: auto; 
    margin-left:10px;
  }
  .ql-editor {
    padding: 10px; 
    min-height: 120px; 
  }
  .ql-toolbar {
    border-bottom: 1px solid #ccc; 
    width: 83%;
    margin-left:10px;
  }
`;

interface NoteToolbarProps {
  value?: string;
  onChange?: (value: string) => void;
}

const NoteToolbar: React.FC<NoteToolbarProps> = ({ value, onChange }) => {
  const quillRef = useRef<ReactQuill | null>(null);

  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      const editorElement = editor.root;

      editorElement.style.height = `${Math.min(editorElement.scrollHeight, 300)}px`;
    }
  }, [value]);

  const editorModules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline"],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["code"],
      ["clean"],
    ],
  };

  return (
    <QuillWrapper>
      <ReactQuill
        ref={quillRef}
        value={value}
        onChange={onChange}
        modules={editorModules}
      />
    </QuillWrapper>
  );
};

export default NoteToolbar;
