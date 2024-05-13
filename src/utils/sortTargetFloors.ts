import { Direction } from "../modules/application/reducers/enums";

interface Options {
  targetFloors: number[];
  newFloor: number;
  currentFloor: number;
  direction: Direction;
}

export function sortTargetFloors({
  targetFloors,
  newFloor,
  currentFloor,
  direction,
}: Options) {
  // add new floor and sort based on direction
  const updatedFloors = [...targetFloors, newFloor];
  if (direction === Direction.UP) {
    return updatedFloors
      .filter((floor) => floor >= currentFloor)
      .sort((a, b) => a - b);
  } else if (direction === Direction.DOWN) {
    return updatedFloors
      .filter((floor) => floor <= currentFloor)
      .sort((a, b) => b - a);
  }

  // when idle, sort based on how close the elevator is to the current floor
  return updatedFloors.sort(
    (a, b) => Math.abs(a - currentFloor) - Math.abs(b - currentFloor)
  );
}
