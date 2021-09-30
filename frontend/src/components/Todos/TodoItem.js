const TodoItem = (props) => {
  return (
    <tr>
      <td>{props.todo.id}</td>
      <td>{props.todo.text}</td>
    </tr>
  );
};

export default TodoItem;
