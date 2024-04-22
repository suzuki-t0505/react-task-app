import Task from "./Task";

const TaskList = (props) => {
  const {tasks, deleteTask} = props;

  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </ul>
  )
}

export default TaskList;