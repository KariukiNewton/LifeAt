function Breathe() {
    return (
        <div className="overlay">
            <div className="breatheContent">
                <h2>Breathe</h2>
                <p>This is the Breathe content.</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Breathe