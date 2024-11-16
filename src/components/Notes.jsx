function Notes() {
    return (
        <div className="overlay">
            <div className="notesContent">
                <h2>Notes</h2>
                <p>This is the Notes content.</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Notes