function Calender({ onClose }) {
    return (
        <div className="calenderContent">
            <h2>Calender</h2>
            <p>This is the Calender content.</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default Calender