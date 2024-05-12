import Direction, { Status } from "./enums";

export interface IApplicationState {
  passengers: Record<string, Passenger>;
  elevators: Record<number, Elevator>;
  floorsCount: number;
  automationControls: {
    isPassengerCreationAutomated: boolean;
    isAppStateAutomated: boolean;
    passengerCreationFrequency: number;
    stateChangeFrequency: number;
  };
}

export interface Passenger {
  id: string;
  initialFloor: number;
  targetFloor: number;
  inElevator: boolean;
  targetElevatorId?: number;
}

export interface Elevator {
  id: number;
  currentFloor: number;
  direction: Direction;
  status: Status;
  targetFloors: number[];
}
