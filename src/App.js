import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

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
      <TaskInput taskText={taskText} changeTaskText={changeTaskText} addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  )
}

export default App;
