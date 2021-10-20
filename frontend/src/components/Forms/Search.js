import { useRef } from "react";

const Search = (props) => {
  const inputText = useRef();

  const filterResultHandler = (event) => {
    event.preventDefault();
    const enteredText = inputText.current.value;

    props.onSearch(props.projects.filter((project) => project.name.includes(enteredText)));
    inputText.current.value = "";
  };

  return (
    <form onSubmit={filterResultHandler}>
      <label htmlFor="search">Search</label>
      <input ref={inputText} type="text" id="search" />
      <button>Search</button>
    </form>
  );
};

export default Search;
