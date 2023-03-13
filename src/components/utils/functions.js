import { ControlStates } from "../../constants/controls";

export const setDelayForAnimation = (timeForDelay = 0) => {
  return new Promise((resolve) => setTimeout(resolve, timeForDelay));
};

export async function getLocation(setControlState) {
  if (navigator.geolocation) {
    setControlState(ControlStates.Changing);
    navigator.geolocation.getCurrentPosition(showPosition);
    await setDelayForAnimation(2000);
    setControlState(ControlStates.Default);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

async function showPosition(position, setCenter, setZoom) {
  setCenter([position.coords.longitude, position.coords.latitude]);
  setZoom(15);
}
