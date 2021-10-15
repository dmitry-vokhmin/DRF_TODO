import { Route, Switch } from "react-router-dom";
import UsersPage from "../../pages/Users";
import ProjectPage from "../../pages/Projects";
import TodoPage from "../../pages/Todos";
import { useEffect, useReducer } from "react";

const dataReducer = (state, action) => {
  if (action.type === "USER_DATA") {
    return { ...state, usersData: action.data, isLoadingUsers: false };
  }
  if (action.type === "PROJECT_DATA") {
    return { ...state, projectsData: action.data, isLoadingProjects: false };
  }
  if (action.type === "TODO_DATA") {
    return { ...state, todosData: action.data, isLoadingTodos: false };
  }
};

const Home = () => {
  const [dataState, dispatchData] = useReducer(dataReducer, {
    usersData: [],
    projectsData: [],
    todosData: [],
    isLoadingUsers: true,
    isLoadingProjects: true,
    isLoadingTodos: true,
  });

  useEffect(() => {
    const header = {
      "Content-Type": "application/json",
      Authorization: "Token " + localStorage.getItem("token"),
    };
    console.log(localStorage.getItem("token"))
    fetch("http://127.0.0.1:8000/api/users/", {
      headers: header,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatchData({ type: "USER_DATA", data: data.results });
      });
    fetch("http://127.0.0.1:8000/api/projects/", {
      headers: header,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatchData({ type: "PROJECT_DATA", data: data.results });
      });
    fetch("http://127.0.0.1:8000/api/todo/", {
      headers: header,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatchData({ type: "TODO_DATA", data: data.results });
      });
  }, []);

  return (
    <Switch>
      <Route path="/" exact>
        <UsersPage
          isLoading={dataState.isLoadingUsers}
          userList={dataState.usersData}
        />
      </Route>
      <Route path="/projects/:id" exact>
        <ProjectPage
          isLoading={dataState.isLoadingProjects}
          projectList={dataState.projectsData}
        />
      </Route>
      <Route path="/projects/:id/todo/">
        <TodoPage
          isLoading={dataState.isLoadingTodos}
          todoList={dataState.todosData}
        />
      </Route>
    </Switch>
  );
};

export default Home;
