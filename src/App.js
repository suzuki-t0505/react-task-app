import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([{id: 1, text: 'test1'}, {id: 2, text: 'test2'}]);
  const [taskText, setTaskText] = useState('');

  const changeTaskText = (text) => {
    setTaskText(text);
  }

  const addTask = () => {
    if (taskText === '')
    {
      alert('Please enter your task.');
      return;
    }

    setTasks((prevTasks) => [...prevTasks, {id: prevTasks.length + 1, text: taskText}]);
    setTaskText('');
  }

  const deleteTask = (id) => {
    if (window.confirm('Delete your task?'))
    {
      setTasks(tasks.filter((task) => task.id !== id));
    }

    return;
  }

  return (
    <div>
      <h1>Task App</h1>
      <div>
        <input
          type="text"
          value={taskText}
          onChange={(e) => changeTaskText(e.target.value)}
          placeholder='Please enter your task'
        />
        <button type="button" onClick={() => addTask()}>Add</button>
      </div>
      <ul>
        {
          tasks.map((task) => (
            <li>
              {task.text}
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;
