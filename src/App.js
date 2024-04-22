import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import { TasksProvider } from "./components/providers/TasksProvider";

const App = () => {
  return (
    <TasksProvider>
      <h1>Task App</h1>
      <TaskInput />
      <TaskList />
    </TasksProvider>
  )
}

export default App;
