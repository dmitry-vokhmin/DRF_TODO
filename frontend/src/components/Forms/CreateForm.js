import {useRef} from "react";

const CreateForm = (props) => {
  const textInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredText = textInput.current.value;
    props.onCreate(enteredText);
    textInput.current.value = "";
  }


  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text-input">Enter text</label>
      <input ref={textInput} placeholder='Enter text' type="text" id='text-input'/>
      <button type='submit'>Add</button>
    </form>
  );
};

export default CreateForm;