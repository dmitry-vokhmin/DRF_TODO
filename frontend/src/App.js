import { useEffect, useReducer } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Layout from "./components/layout/Layout";
import UsersPage from "./pages/Users";
import ProjectPage from "./pages/Projects";
import TodoPage from "./pages/Todos";

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

function App() {
  const [dataState, dispatchData] = useReducer(dataReducer, {
    usersData: [],
    projectsData: [],
    todosData: [],
    isLoadingUsers: true,
    isLoadingProjects: true,
    isLoadingTodos: true,
  });

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/users/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatchData({ type: "USER_DATA", data: data.results });
      });
    fetch("http://127.0.0.1:8000/api/projects/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatchData({ type: "PROJECT_DATA", data: data.results });
      });
    fetch("http://127.0.0.1:8000/api/todo/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatchData({ type: "TODO_DATA", data: data.results });
      });
  }, []);

  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
