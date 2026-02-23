export const initialPlayerState = { status: "paused" };

export function playerReducer(state, action) {
  switch (action.type) {
    case "PLAY":
      return { status: "playing" };
    case "PAUSE":
      return { status: "paused" };
    default:
      return state;
  }
}
