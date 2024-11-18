function Media({ onClose }) {
    return (
        <div className="overlay">
            <div className="mediaContent">
                <h2>Media</h2>
                <p>This is the Media content.</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Media