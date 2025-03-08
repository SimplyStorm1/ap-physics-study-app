import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function Notes() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  // Function to Save Note
  const saveNote = async () => {
    if (note.trim() !== "") {
      await addDoc(collection(db, "notes"), { text: note });
      setNotes([...notes, note]);
      setNote("");
    }
  };

  // Function to Load Notes from Firebase
  const fetchNotes = async () => {
    const querySnapshot = await getDocs(collection(db, "notes"));
    setNotes(querySnapshot.docs.map((doc) => doc.data().text));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">AP Physics Notes</h1>
      <textarea
        className="w-full p-2 border rounded"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your notes here..."
      />
      <button onClick={saveNote} className="mt-2 p-2 bg-blue-500 text-white rounded">Save Note</button>
      <button onClick={fetchNotes} className="mt-2 ml-2 p-2 bg-green-500 text-white rounded">Load Notes</button>
      <ul className="mt-4">
        {notes.map((n, i) => (
          <li key={i} className="p-2 border-b">{n}</li>
        ))}
      </ul>
    </div>
  );
}
