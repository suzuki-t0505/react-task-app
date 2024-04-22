const TaskInput = (props) => {
  const {taskText, changeTaskText, addTask} = props;

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