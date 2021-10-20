import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Text</th>
          <th>Delete</th>
          <th>Add</th>
        </tr>
      </thead>
      <tbody>
        {props.todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={props.onDelete} onShow={props.onShowForm}/>
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
