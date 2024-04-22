const Task = (props) => {
  const {task, deleteTask} = props;
  return (
    <li>
      {task.text}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  )
}

export default Task;