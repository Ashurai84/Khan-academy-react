import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, addTodo, toggleTodo, removeTodo, clearTodos } from '../features/todos/todosSlice';

export default function Todos() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todos.items);
  const status = useSelector((state) => state.todos.status);
  const error = useSelector((state) => state.todos.error);
  
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTodos());
    }
  }, [status, dispatch]);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo({
        id: Date.now(),
        title: newTodo,
        completed: false,
      }));
      setNewTodo('');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Redux Toolkit Todos</h1>
      
      {/* Add Todo */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo..."
          style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button 
          onClick={handleAddTodo}
          style={{ padding: '8px 16px', background: '#1865f2', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Add
        </button>
        <button 
          onClick={() => dispatch(clearTodos())}
          style={{ padding: '8px 16px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Clear All
        </button>
      </div>

      {/* Status */}
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p style={{ color: 'red' }}>Error: {error}</p>}

      {/* Todo List */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((todo) => (
          <li 
            key={todo.id} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px', 
              padding: '10px', 
              marginBottom: '8px',
              background: '#f5f5f5',
              borderRadius: '4px'
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <span style={{ 
              flex: 1, 
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#888' : '#000'
            }}>
              {todo.title}
            </span>
            <button 
              onClick={() => dispatch(removeTodo(todo.id))}
              style={{ padding: '4px 8px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {items.length === 0 && status === 'succeeded' && (
        <p style={{ textAlign: 'center', color: '#888' }}>No todos yet!</p>
      )}
    </div>
  );
}
