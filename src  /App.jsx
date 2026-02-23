import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";

import Counter from "./components/Counter";
import FocusInput from "./components/FocusInput";
import Player from "./components/Player";
import ThemeSwitcher from "./components/ThemeSwitcher";
import HeavyCalculation from "./components/HeavyCalculation";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div style={{ padding: 20 }}>
        <h2>React Hooks Demo</h2>

        <Counter />
        <hr />

        <FocusInput />
        <hr />

        <Player />
        <hr />

        <ThemeSwitcher />
        <hr />

        <HeavyCalculation />
      </div>
    </ThemeContext.Provider>
  );
}
