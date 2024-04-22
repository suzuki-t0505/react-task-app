import { useContext } from "react";
import { TaskContext } from "./providers/TasksProvider";

const Task = (props) => {
  const { task } = props;
  const { deleteTask } = useContext(TaskContext);
  return (
    <li>
      {task.text}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  )
}

export default Task;