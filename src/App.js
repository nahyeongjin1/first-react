import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("I run all the time :)");
  useEffect(() => {
    console.log("API Called");
  }, []);
  return (
    <div>
      <h1 className={styles.title}>Welcome back to react!</h1>
      <span>{value}</span>
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
}

export default App;
