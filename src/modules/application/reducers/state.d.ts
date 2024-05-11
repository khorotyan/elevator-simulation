import Direction from "./enums";

export interface IApplicationState {
  passengers: Record<string, Passenger>;
  elevators: Record<string, Elevator>;
  floorsCount: number;
}

export interface Passenger {
  id: number;
  currentFloor: number;
  targetFloor: number;
  inElevator: boolean;
}

export interface Elevator {
  id: number;
  currentFloor: number;
  direction: Direction;
  targetFloors: number[];
}
