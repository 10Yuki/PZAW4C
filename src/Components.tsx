export interface Props_task {
  id: number;
  title: string;
  task: string;
  done: boolean;
}

interface Props_showtask extends Props_task {
  onToggle: (id: number) => void;
}

export function Showtask({ id, title, task, done, onToggle }: Props_showtask) {
  return (
    <li>
      <input
        type="checkbox"
        checked={done}
        onChange={() => onToggle(id)}
      />
      <div>
        <h5>{title}</h5>
        <p>{task}</p>
      </div>
    </li>
  );
}