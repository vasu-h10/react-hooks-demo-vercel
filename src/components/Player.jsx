import { useReducer } from "react";
import { playerReducer, initialPlayerState } from "../reducers/playerReducer";

export default function Player() {
  const [player, dispatch] = useReducer(playerReducer, initialPlayerState);

  return (
    <>
      <p>Player status: {player.status}</p>
      <button onClick={() => dispatch({ type: "PLAY" })}>Play</button>
      <button onClick={() => dispatch({ type: "PAUSE" })}>Pause</button>
    </>
  );
}
