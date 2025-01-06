import React, { useState } from "react";

function App() {

  const [name, setName] = useState('');
  const [headingText, setHeadingText] = useState('');

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeadingText(name);
    console.log({name});

    event.preventDefault();
  }


  return (
    <div className="container">
      <form>
      <h1>Hello {headingText} </h1>
      <input 
        onChange={handleChange} 
        type="text" 
        placeholder="What's your name?"
        value={name} />
      <button type="submit" onClick={ handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
