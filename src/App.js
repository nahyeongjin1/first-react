import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("Only Once");
  }, []);
  useEffect(() => {
    console.log("When 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
    console.log("When 'value' changes");
  }, [value]);
  useEffect(() => {
    console.log("When 'keyword' or 'value' changes");
  }, [keyword, value]);
  return (
    <div>
      <h1 className={styles.title}>Welcome back to react!</h1>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <span>{value}</span>
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
}

export default App;
