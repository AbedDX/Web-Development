import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <ul>
      <li>Pizza</li>
      <img
        alt="Pizza"
        className="food-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWiFweCcnq8Qokl0t3W2uU3WXQ9WHVbGXFDQ&s"
        style={{ filter: "grayscale(80%)" }}
      />
      <li>Lasagnette</li>
      <img
        alt="Lasagnette"
        className="food-img"
        src="https://cdn.snellman.fi/app/uploads/2023/02/ut2g6nwisouoqhxcruwzma.jpg?format=webp&fit=cover"
      />
      <li>Noodles</li>
      <img
        alt="Noodles"
        className="food-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujx5jb6WvhHb7XcW46Rmel1lts4KHWkuBfw&s"
      />
    </ul>
    <h1 className="heading">random image</h1>
    <img alt="random-img" src={img + "?grayscale"} />
  </div>,

  document.getElementById("root")
);


// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
