import { useContext } from "react";
import { TaskContext } from "./providers/TasksProvider";

const TaskInput = () => {
  const {taskText, changeTaskText, addTask} = useContext(TaskContext);

  return (
    <div>
      <input
        type="text"
        value={taskText}
        onChange={(e) => changeTaskText(e.target.value)}
        placeholder='Please enter your task'
      />
      <button type="button" onClick={() => addTask()}>Add</button>
  </div>
  )
}

export default TaskInput;