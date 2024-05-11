export function generateRandomFloors(maxFloors: number): [number, number] {
  if (maxFloors === 0) {
    return [0, 0];
  }

  const getRandomFloor = (max: number): number => {
    return Math.floor(Math.random() * (max + 1));
  };

  let initialFloor = getRandomFloor(maxFloors);
  let destinationFloor = getRandomFloor(maxFloors);

  while (destinationFloor === initialFloor) {
    destinationFloor = getRandomFloor(maxFloors);
  }

  return [initialFloor, destinationFloor];
}
