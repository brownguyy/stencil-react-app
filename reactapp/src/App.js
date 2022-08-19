import "./App.css";
import { useState } from "react";
import TodoLIst from "./TodoLIst";
import { Red, Primary } from "./stories/Button.stories";
import { Vertical, Horizontal } from "./stories/Stack.stories";
function App() {
  const [inputValue, setInputValue] = useState("");
  function click() {
    console.log("inputValue", inputValue);
    alert("button clicked", inputValue);
  }

  function inputHandler(e) {
    console.log("e", e);
    setInputValue(e.target.value);
  }

  return (
    <div className="App">
      <Red
        label="Click ME"
        onClick={() => alert("Clicked")}
        backgroundColor="red"
        size="small"
      />
      <Primary label="Primary" primary size="large" />
      {/* <Vertical numberOfChildren={4} direction="column" /> */}
      <Horizontal numberOfChildren={6} />
      <TodoLIst />
    </div>
  );
}

export default App;
