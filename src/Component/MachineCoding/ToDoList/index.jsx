import React, { useState, useEffect } from 'react';

export default function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [toDo, setToDo] = useState('');

    useEffect(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);

    useEffect(() => {
        const saveTodosToLocalStorage = () => {
            localStorage.setItem('todos', JSON.stringify(todos));
        };

        const handleBeforeUnload = (event) => {
            saveTodosToLocalStorage();
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            saveTodosToLocalStorage();
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [todos]);

    const handleAddTodo = () => {
        if (toDo.trim() === '') return;

        const newTodo = {
            id: Date.now(),
            text: toDo,
            completed: false,
        };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setToDo('');
    };

    const handleToggleComplete = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleDeleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">
                <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">To-Do List</h1>

                <div className="flex mb-4">
                    <input
                        type="text"
                        value={toDo}
                        onChange={(e) => setToDo(e.target.value)}
                        className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Add a new task"
                    />
                    <button
                        onClick={handleAddTodo}
                        className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Add
                    </button>
                </div>

                <ul>
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className="flex justify-between items-center p-3 mb-2 bg-gray-50 rounded-lg shadow-sm"
                        >
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => handleToggleComplete(todo.id)}
                                    className="mr-3"
                                />
                                <p
                                    className={`flex-1 text-gray-700 ${todo.completed ? 'line-through text-gray-400' : ''
                                        }`}
                                >
                                    {todo.text}
                                </p>
                            </div>

                            <button
                                onClick={() => handleDeleteTodo(todo.id)}
                                className="p-1 ml-3 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
