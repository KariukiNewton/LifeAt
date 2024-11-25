import React, { useState, useEffect } from "react";
import { CgCloseR } from "react-icons/cg";
import { IoMdMore } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";

function Tasks({ onClose }) {
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [tasks, setTasks] = useState([]);
    const [filterTag, setFilterTag] = useState("tags");
    const [activeMenuId, setActiveMenuId] = useState(null);
    const [activeTagMenuId, setActiveTagMenuId] = useState(null);
    const [showDeleteMenu, setShowDeleteMenu] = useState(false);

    const tags = ["work", "sideproject", "personal", "reading list", "unassigned"];

    // Dragging Handlers
    const handleMouseDown = (e) => {
        if (e.target.closest(".taskItem") || e.target.closest(".popup-menu")) return;
        setIsDragging(true);
        setDragOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const sidebarWidth = 90;
        const maxX = window.innerWidth - 350;
        const maxY = window.innerHeight - 600;

        let newX = e.clientX - dragOffset.x;
        let newY = e.clientY - dragOffset.y;

        newX = Math.max(sidebarWidth, Math.min(newX, maxX));
        newY = Math.max(0, Math.min(newY, maxY));

        setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Effects to Handle Outside Clicks and Drag Events
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                !e.target.closest(".popup-menu") &&
                !e.target.closest(".moreButton") &&
                !e.target.closest(".addTag") &&
                !e.target.closest(".deleteButton")
            ) {
                setActiveMenuId(null);
                setActiveTagMenuId(null);
                setShowDeleteMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        }
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging, dragOffset]);

    // Task Operations
    const addTask = () => {
        setTasks([
            ...tasks,
            {
                id: Date.now(),
                text: "",
                completed: false,
                tag: "unassigned",
            },
        ]);
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
        setActiveMenuId(null);
    };

    const deleteCompletedTasks = () => {
        setTasks(tasks.filter((task) => !task.completed));
        setShowDeleteMenu(false);
    };

    const deleteAllTasks = () => {
        setTasks([]);
        setShowDeleteMenu(false);
    };

    const duplicateTask = (taskId) => {
        const taskToDuplicate = tasks.find((task) => task.id === taskId);
        if (taskToDuplicate) {
            setTasks([
                ...tasks,
                {
                    ...taskToDuplicate,
                    id: Date.now(),
                    text: `${taskToDuplicate.text} (copy)`,
                },
            ]);
        }
        setActiveMenuId(null);
    };

    const updateTaskText = (taskId, newText) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId ? { ...task, text: newText } : task
            )
        );
    };

    const toggleTaskComplete = (taskId) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const updateTaskTag = (taskId, newTag) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId ? { ...task, tag: newTag } : task
            )
        );
        setActiveTagMenuId(null);
    };

    const handleDeleteButtonClick = (e) => {
        e.stopPropagation(); // Prevent event from bubbling up
        setShowDeleteMenu(!showDeleteMenu);
        // Close other menus when delete menu is opened
        setActiveMenuId(null);
        setActiveTagMenuId(null);
    };

    const filteredTasks =
        filterTag === "tags" ? tasks : tasks.filter((task) => task.tag === filterTag);

    return (
        <div
            className="tasksContent"
            style={{
                position: "absolute",
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        >
            <button className="closeBtn" onClick={onClose}>
                <CgCloseR />
            </button>

            <div
                className="header"
                style={{
                    cursor: isDragging ? "grabbing" : "grab",
                    userSelect: "none"  // Prevents text selection while dragging
                }}
                onMouseDown={handleMouseDown}
            >
                <select
                    value={filterTag}
                    onChange={(e) => setFilterTag(e.target.value)}
                >
                    <option value="tags">Tags</option>
                    {tags.map((tag) => (
                        <option key={tag} value={tag}>
                            {tag}
                        </option>
                    ))}
                </select>
                <select defaultValue="filter">
                    <option value="filter">Filter</option>
                    <option value="today">Today</option>
                    <option value="overdue">Overdue</option>
                    <option value="unscheduled">Unscheduled</option>
                </select>
            </div>

            <div className="tasksList">
                <button className="addTask" onClick={addTask}>
                    <FaPlus /> Add a Task
                </button>

                {filteredTasks.map((task) => (
                    <div key={task.id} className="taskItem">
                        <input
                            type="checkbox"
                            className="taskCheckBox"
                            checked={task.completed}
                            onChange={() => toggleTaskComplete(task.id)}
                        />
                        <input
                            type="text"
                            className="taskName"
                            value={task.text}
                            onChange={(e) => updateTaskText(task.id, e.target.value)}
                            placeholder="Add a task"
                        />

                        <div className="tagContainer">
                            <button
                                className="addTag"
                                onClick={() =>
                                    setActiveTagMenuId(
                                        activeTagMenuId === task.id ? null : task.id
                                    )
                                }
                            >
                                {task.tag === "unassigned" ? "+ add tag" : task.tag}
                            </button>
                            {activeTagMenuId === task.id && (
                                <div className="popup-menu">
                                    {tags.map((tag) => (
                                        <button
                                            key={tag}
                                            onClick={() => updateTaskTag(task.id, tag)}
                                            className={task.tag === tag ? "active" : ""}
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="moreButtonContainer">
                            <button
                                className="moreButton"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveMenuId(
                                        activeMenuId === task.id ? null : task.id
                                    );
                                }}
                            >
                                <IoMdMore />
                            </button>
                            {activeMenuId === task.id && (
                                <div className="popup-menu">
                                    <button onClick={() => duplicateTask(task.id)}>
                                        Duplicate
                                    </button>
                                    <button onClick={() => deleteTask(task.id)}>
                                        Delete
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="tasksControl">
                <div className="deleteButtonContainer" style={{ position: 'relative' }}>
                    <button
                        className="deleteButton"
                        onClick={handleDeleteButtonClick}
                    >
                        <MdDeleteOutline />
                    </button>
                    {showDeleteMenu && (
                        <div className="popup-menu2" style={{ position: 'absolute', bottom: '100%', left: '0' }}>
                            <button onClick={deleteAllTasks}>Delete all tasks</button>
                            <button onClick={deleteCompletedTasks}>
                                Delete completed tasks
                            </button>
                        </div>
                    )}
                </div>

                <div className="progressContainer">
                    <progress
                        value={tasks.filter((t) => t.completed).length}
                        max={tasks.length}
                    />
                    <span>
                        {tasks.filter((t) => t.completed).length}/{tasks.length}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Tasks;