import { useEffect, useState } from "react";

import "./App.css";
import Layout from "./components/layout/Layout";
import LoginForm from "./components/Forms/LoginForm";
import Home from "./components/Home/Home";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const loginToken = localStorage.getItem("token");

    if (loginToken && loginToken !== "undefined") {
      setIsLogin(true);
    }
  }, []);

  const loginHandler = (username, password) => {
    const data = {
      username: username,
      password: password,
    };
    fetch("http://127.0.0.1:8000/api-token-auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        saveToken(data["token"]);
        setIsLogin(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const saveToken = (token) => {
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
  };

  return (
    <Layout isLoggedIn={isLogin} onLogout={logoutHandler}>
      {isLogin && <Home onLogout={logoutHandler} />}
      {!isLogin && <LoginForm onLogin={loginHandler} />}
    </Layout>
  );
}

export default App;
