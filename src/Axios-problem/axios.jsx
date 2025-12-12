import { useEffect, useState } from "react";
import axios from "axios";

export default function AxiosProblem() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                setTodos(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Todos</h1>
            {todos.slice(0, 5).map(t => (
                <p key={t.id}>{t.title}</p>
            ))}
        </div>
    );
}