import { FC, useState, ChangeEvent } from "react";
import "./App.css";
import { ITask, ITimes } from "./Interfaces";
import TodoTask from "./Component/TodoTask";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [currentTime, setCurrentTime] = useState<ITimes>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const getClock = (): void => {
    const now = new Date();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    if (name === "task") {
      setTask(value);
    } else {
      setDeadline(Number(value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const deleteTask = (targetTask: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== targetTask;
      })
    );
  };

  return (
    <div className="App">
      <div className="timer">00:00</div>
      <div className="header">
        <div className="inputContainer">
          <input
            name="task"
            type="text"
            value={task}
            placeholder="Task ..."
            onChange={handleChange}
          />
          <input
            name="deadline"
            type="number"
            value={deadline}
            placeholder="DeadLine ... "
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todolist">
        {todoList &&
          todoList.map((task: ITask, key: number) => {
            return <TodoTask key={key} task={task} deleteTask={deleteTask} />;
          })}
      </div>
    </div>
  );
};

export default App;
