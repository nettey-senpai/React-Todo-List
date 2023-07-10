import { TodoItem } from "./TodoItem";

export function TodoList(todos) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoItem {...todo} key={todo.id} />
          // eslint-disable-next-line react/jsx-key
        );
      })}
    </ul>
  );
}