import { useRef } from "react";

const LoginForm = (props) => {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;
    props.onLogin(username, password);
    usernameInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };

  return (
    <form className="center" onSubmit={submitHandler}>
      <input
        ref={usernameInputRef}
        type="text"
        name="login"
        placeholder="login"
      />
      <input
        ref={passwordInputRef}
        type="password"
        name="password"
        placeholder="password"
      />
      <input type="submit" value="Login" />
    </form>
  );
};

export default LoginForm;
