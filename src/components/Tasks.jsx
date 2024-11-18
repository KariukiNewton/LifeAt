function Tasks({ onClose }) {
    return (
        <div className="tasksContent">
            <h2>Tasks</h2>
            <p>This is the Tasks content.</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default Tasks