import { useState } from "react";

export function useTheme() {
  const [isDark, setIsDark] = useState(false);

  function toggleTheme() {
    setIsDark(prev => !prev);
  }

  return { isDark, toggleTheme };
}
