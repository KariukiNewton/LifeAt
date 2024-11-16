function Timer() {

    return (
        <div className="overlay">
            <div className="timerContent">
                <h2>Timer</h2>
                <p>This is the Timer content.</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Timer