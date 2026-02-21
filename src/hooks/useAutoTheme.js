import { useEffect } from "react";

export function useAutoTheme(setIsDark) {
  useEffect(() => {
    function updateThemeByTime() {
      const hour = new Date().getHours();
      setIsDark(hour < 6 || hour >= 18);
    }

    updateThemeByTime();
    const interval = setInterval(updateThemeByTime, 60000);

    return () => clearInterval(interval);
  }, [setIsDark]);
}
