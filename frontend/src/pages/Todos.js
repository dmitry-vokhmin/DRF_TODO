import TodoList from "../components/Todos/TodoList";
import { useParams } from "react-router-dom";

const TodoPage = (props) => {
  const { id } = useParams();

  const filteredTodo = props.todoList.filter(
    (todo) => todo.project === parseInt(id)
  );

  if (props.isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <section className="center">
      <h1>All Project Todo</h1>
      <TodoList todoList={filteredTodo} />
    </section>
  );
};

export default TodoPage;
