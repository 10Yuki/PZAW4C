import { useState } from "react";
import { Showtask } from "./Components";
import type { Props_task } from "./Components";

const starttasks: Props_task[] = [
  { id: 1, title: "Zadanie domowe", task: "Zrobić zadanie domowe z matematyki", done: false },
  { id: 2, title: "Zadanie domowe", task: "Zrobić zadanie domowe z polskiego", done: true },
  { id: 3, title: "Zakupy", task: "Kupić chleb i mleko", done: false },
];

function App() {
  const [tasks, setTasks] = useState(starttasks);
  const [filter, setFilter] = useState("Wszystkie");

  const notdonecount = tasks.filter((task) => (!task.done)).length;

  function handleToggle(id: number) {
    const newtasks = tasks.map((task) => {
      if (task.id === id) {
        return { id: task.id, title: task.title, task: task.task, done: !task.done };
      }
      return task;
    });
    setTasks(newtasks);
  }

  function handleWhichShown(ktore: string) {
    setFilter(ktore);
  }

  let visibletasks;
  if (filter === "Zrobione") {
    visibletasks = tasks.filter((task) => task.done == true);
  } else if (filter === "Niezrobione") {
    visibletasks = tasks.filter((task) => task.done == false);
  } else {
    visibletasks = tasks;
  }

  return (
    <div>
      <h1>Lista zadań</h1>
      <p>Niewykonane zadania: {notdonecount}</p>
      <button onClick={() => {handleWhichShown("Wszystkie")}}>Wszystkie</button>
      <button onClick={() => {handleWhichShown("Zrobione")}}>Zrobione</button>
      <button onClick={() => {handleWhichShown("Niezrobione")}}>Niezrobione</button>
      <ul>
        {visibletasks.map((task) => (
          <Showtask key={task.id} id={task.id} title={task.title} task={task.task} done={task.done} onToggle={handleToggle}
          />
        ))}
      </ul>
    </div>
  );
}
export default App
