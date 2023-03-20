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

function swap(items, firstIndex, secondIndex) {
  const temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)].data,
    i = left,
    j = right;
  while (i <= j) {
    while (items[i].data < pivot) {
      i++;
    }
    while (items[j].data > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
}

export function quickSort(items, left, right) {
  let index;
  if (items.length > 1) {
    left = typeof left != "number" ? 0 : left;
    right = typeof right != "number" ? items.length - 1 : right;
    index = partition(items, left, right);
    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      quickSort(items, index, right);
    }
  }
  return items;
}
