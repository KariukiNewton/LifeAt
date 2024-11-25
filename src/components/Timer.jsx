import React, { useState, useEffect } from 'react';
import { CgCloseR } from 'react-icons/cg';
import { VscDebugRestart } from 'react-icons/vsc';
import { FaCog } from 'react-icons/fa';

function Timer({ onClose }) {
    const [timerMode, setTimerMode] = useState('pomodoro');
    const [pomodoroTime, setPomodoroTime] = useState(50);
    const [shortBreakTime, setShortBreakTime] = useState(5);
    const [longBreakTime, setLongBreakTime] = useState(10);
    const [isRunning, setIsRunning] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(pomodoroTime * 60);
    const [autoTransition, setAutoTransition] = useState(true);
    const [hidePomodorCount, setHidePomodorCount] = useState(false);
    const [timerSound, setTimerSound] = useState('twinkle');
    const [timerVolume, setTimerVolume] = useState(1);

    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setDragOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    }

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const sidebarWidth = 90;
        const maxX = window.innerWidth - 350;
        const maxY = window.innerHeight - 600;

        let newX = e.clientX - dragOffset.x;
        let newY = e.clientY - dragOffset.y;

        newX = Math.max(sidebarWidth, Math.min(newX, maxX));
        newY = Math.max(0, Math.min(newY, maxY))

        setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    }

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, dragOffset]);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTimeRemaining((prevTime) => prevTime - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    useEffect(() => {
        if (timeRemaining === 0) {
            handleTimerComplete();
        }
    }, [timeRemaining]);

    const handleTimerComplete = () => {
        setIsRunning(false);
        if (timerMode === 'pomodoro') {
            if (autoTransition) {
                setTimerMode('shortBreak');
                setTimeRemaining(shortBreakTime * 60);
            }
        } else if (timerMode === 'shortBreak') {
            if (autoTransition) {
                setTimerMode('pomodoro');
                setTimeRemaining(pomodoroTime * 60);
            }
        } else if (timerMode === 'longBreak') {
            if (autoTransition) {
                setTimerMode('pomodoro');
                setTimeRemaining(pomodoroTime * 60);
            }
        }
        // Play timer sound
        playTimerSound();
    };

    const playTimerSound = () => {
        // Play the timer sound based on the selected sound and volume
    };

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleReset = () => {
        setIsRunning(false);
        if (timerMode === 'pomodoro') {
            setTimeRemaining(pomodoroTime * 60);
        } else if (timerMode === 'shortBreak') {
            setTimeRemaining(shortBreakTime * 60);
        } else if (timerMode === 'longBreak') {
            setTimeRemaining(longBreakTime * 60);
        }
    };

    const handleTimerModeChange = (mode) => {
        setTimerMode(mode);
        if (mode === 'pomodoro') {
            setTimeRemaining(pomodoroTime * 60);
        } else if (mode === 'shortBreak') {
            setTimeRemaining(shortBreakTime * 60);
        } else if (mode === 'longBreak') {
            setTimeRemaining(longBreakTime * 60);
        }
        setIsRunning(false);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <div
            className="timerContent"
            style={{
                position: 'fixed',
                left: `${position.x}px`,
                top: `${position.y}px`,
                cursor: isDragging ? 'grabbing' : 'default'
            }}
        >
            <button className="closeBtn" onClick={onClose}>
                <CgCloseR />
            </button>

            <div
                className="timerHeader"
                style={{ cursor: 'grab' }}
                onMouseDown={handleMouseDown}
            >
                <select>
                    <option>Personal</option>
                    <option>Group</option>
                </select>
            </div>

            <div className="timerDisplay">
                <div className="timerCountDown">{formatTime(timeRemaining)}</div>
                <button className="StartButton" onClick={handleStart}>
                    Start
                </button>
                <button className="resetButton" onClick={handleReset}>
                    <VscDebugRestart />
                </button>
            </div>

            <div className="changeTimers">
                <button
                    className={`pomodoroBtn ${timerMode === 'pomodoro' ? 'active' : ''}`}
                    onClick={() => handleTimerModeChange('pomodoro')}
                >
                    Pomodoro
                </button>
                <button
                    className={`shortBreakBtn ${timerMode === 'shortBreak' ? 'active' : ''}`}
                    onClick={() => handleTimerModeChange('shortBreak')}
                >
                    Short Break
                </button>
                <button
                    className={`longBreakButton ${timerMode === 'longBreak' ? 'active' : ''}`}
                    onClick={() => handleTimerModeChange('longBreak')}
                >
                    Long Break
                </button>
                <button className="toggleViewer">
                    <FaCog />
                </button>
            </div>

            <div className="countDownSettings">
                <label>
                    <input
                        type="checkbox"
                        checked={autoTransition}
                        onChange={(e) => setAutoTransition(e.target.checked)}
                    />
                    Auto-transition Timer
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={hidePomodorCount}
                        onChange={(e) => setHidePomodorCount(e.target.checked)}
                    />
                    Hide Pomodoro Count
                </label>
            </div>

            <div className="setTimers">
                <div className="pomodoTimer">
                    <label>Focus Session</label>
                    <input
                        type="number"
                        value={pomodoroTime}
                        onChange={(e) => setPomodoroTime(e.target.value)}
                    />
                </div>
                <div className="shortBreakTimer">
                    <label>Short Break</label>
                    <input
                        type="number"
                        value={shortBreakTime}
                        onChange={(e) => setShortBreakTime(e.target.value)}
                    />
                </div>
                <div className="longBreakTimer">
                    <label>Long Break</label>
                    <input
                        type="number"
                        value={longBreakTime}
                        onChange={(e) => setLongBreakTime(e.target.value)}
                    />
                </div>
            </div>

            <div className="timerSound">
                <label>Timer Sound</label>
                <select
                    value={timerSound}
                    onChange={(e) => setTimerSound(e.target.value)}
                >
                    <option value="twinkle">Twinkle</option>
                    <option value="slowRise">Slow Rise</option>
                    <option value="rooster">Rooster</option>
                </select>
                <input
                    type="range"
                    className="volume"
                    min="0"
                    max="1"
                    step="0.01"
                    value={timerVolume}
                    onChange={(e) => setTimerVolume(e.target.value)}
                />
            </div>
            <button className="saveBtn">Save</button>
        </div>
    );
}

export default Timer;



