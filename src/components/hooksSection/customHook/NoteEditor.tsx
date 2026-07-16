import { ChangeEvent } from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";

export default function NoteEditor({ id }) {
  const [value, setValue] = useLocalStorage(id, "");

  return (
    <div className="note-editor">
      <textarea
        value={value}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
        placeholder="Type your note here..."
      />
      <p className="note-info">Note is auto-saved to localStorage</p>
    </div>
  );
}
