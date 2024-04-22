import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TasksProvider = (props) => {
  const { children } = props;
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
    <TaskContext.Provider value={{tasks, taskText, changeTaskText, addTask, deleteTask}}>
      { children }
    </TaskContext.Provider>
  )
}