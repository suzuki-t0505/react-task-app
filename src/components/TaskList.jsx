import { useContext } from "react";
import Task from "./Task";
import { TaskContext } from "./providers/TasksProvider";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  )
}

export default TaskList;