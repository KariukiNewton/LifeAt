function Notes({ onClose }) {
    return (
        <div className="notesContent">
            <h2>Notes</h2>
            <p>This is the Notes content.</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default Notes