import TodoList from "../components/Todos/TodoList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CreateForm from "../components/Forms/CreateForm";

const TodoPage = (props) => {
  const [todo, setTodo] = useState([]);
  const [showTodoForm, setShowTodoForm] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const filteredTodo = props.todoList.filter(
      (todo) => todo.project === parseInt(id)
    );
    setTodo(filteredTodo);
  }, [props.todoList, id]);

  const header = {
    "Content-Type": "application/json",
    Authorization: "Token " + localStorage.getItem("token"),
  };

  const onDeleteHandler = (id) => {
    fetch(`http://127.0.0.1:8000/api/todo/${id}`, {
      method: "DELETE",
      headers: header,
    }).then((response) => {
      const removeTodo = todo.filter((todo) => todo.id !== id);
      setTodo(removeTodo);
    });
  };

  const onAddTodoHandler = (data) => {
    const newData = {
      'project': id,
      'text': data,
      'is_active': true,
    }

    fetch(`http://127.0.0.1:8000/api/todo/`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(newData),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setTodo((prevState) => [...prevState, data])
      });
  };

  if (props.isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <section className="center">
      <h1>All Project Todo</h1>
      <TodoList todoList={todo} onDelete={onDeleteHandler} onShowForm={setShowTodoForm}/>
      {showTodoForm && <CreateForm onCreate={onAddTodoHandler}/>}
    </section>
  );
};

export default TodoPage;
