import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

console.log(emojipedia);

// 1. Create an Entry component
// 2. Create props to replace hard-coded data
// 3a. Map over the emojipedia array and render the Entry components
// 3b. import the emojipedia const.


function createEntry(emojiTerm) {
  return ( <Entry
    key={emojiTerm.id}
    emoji={emojiTerm.emoji}
    name={emojiTerm.name}
    description={emojiTerm.meaning}
  />
  );
}



function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
