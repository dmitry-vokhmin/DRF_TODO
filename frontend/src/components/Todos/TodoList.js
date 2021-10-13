import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Text</th>
        </tr>
      </thead>
      <tbody>
        {props.todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
