import { useRef } from "react";

export default function FocusInput() {
  const inputRef = useRef(null);

  return (
    <>
      <input ref={inputRef} placeholder="Focus me" />
      <button onClick={() => inputRef.current.focus()}>
        Focus Input (useRef)
      </button>
    </>
  );
}
