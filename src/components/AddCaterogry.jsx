import { useState } from "react";

export const AddCategory = ({onNewCategory} ) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
   if(inputValue.length>0)
   onNewCategory(inputValue)
    setInputValue("");

    // onAddCategory(inputValueByUser);
  };

  return (
    <form
      onSubmit={(event) => {
        onSubmit(event);
      }}
    >
      <input
        id="inputid"
        type="text"
        placeholder="buscar gif"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      ></input>
    </form>
  );
};
