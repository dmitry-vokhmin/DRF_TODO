const TodoItem = (props) => {
  return (
    <tr>
      <td>{props.todo.id}</td>
      <td>{props.todo.text}</td>
      <td>
        <button onClick={() => props.onDelete(props.todo.id)}>Delete</button>
      </td>
      <td>
        <button onClick={() => props.onShow(true)}>Add</button>
      </td>
    </tr>
  );
};

export default TodoItem;
