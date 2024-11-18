function Timer({ onClose }) {

    return (
        <div className="timerContent">
            <h2>Timer</h2>
            <p>This is the Timer content.</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
}
export default Timer