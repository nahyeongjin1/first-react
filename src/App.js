import styles from "./App.module.css";
import { useEffect, useState } from "react";

function Hello() {
  useEffect(() => {
    console.log("Created :)");
    return () => console.log("Destroyed :(");
  }, []);
  return <h1>Hello! Anonymous</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
