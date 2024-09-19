import React, { useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { QuillWrapper } from "./CreateProduct.styled";



interface NoteToolbarProps {
  value: string;
  onChange: (value: string) => void;
}

const NoteToolbar: React.FC<NoteToolbarProps> = ({ value, onChange }) => {
  const quillRef = useRef<ReactQuill | null>(null);

  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      const editorElement = editor.root;

      editorElement.style.height = `${Math.min(
        editorElement.scrollHeight,
        300
      )}px`;
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
