import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}

export function useCounter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return {
    count,
    increment: () => dispatch({ type: "INC" }),
    decrement: () => dispatch({ type: "DEC" }),
    reset: () => dispatch({ type: "RESET" })
  };
}
