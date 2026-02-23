import { useMemo } from "react";

export default function HeavyCalculation() {
  const heavyCalculation = useMemo(() => {
    console.log("Heavy calculation running...");
    let total = 0;
    for (let i = 0; i < 1000000; i++) {
      total += i;
    }
    return total;
  }, []);

  return <p>Heavy calculation result: {heavyCalculation}</p>;
}
