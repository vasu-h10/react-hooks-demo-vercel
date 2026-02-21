import { useTheme } from "./hooks/useTheme";
import { useAutoTheme } from "./hooks/useAutoTheme";
import { useCounter } from "./hooks/useCounter";

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const { count, increment, decrement, reset } = useCounter();

  useAutoTheme(() => {}); // optional if auto theme needed

  return (
    <div
      style={{
        height: "100vh",
        background: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
        textAlign: "center",
        paddingTop: "40px"
      }}
    >
      <h1>{isDark ? "Dark 🌙" : "Light ☀️"}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <h2>Counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}