import { IApplicationState } from "../state";
import { produce } from "immer";
import { applicationAddPassengerAction } from "../../actions/addPassenger";
import { v4 as uuidv4 } from "uuid";
import { generateRandomFloors } from "../../../../utils/randomFloorsGenerator";

export const applicationAddPassengerProducer = produce(
  (
    draftState: IApplicationState,
    {
      payload: { initialFloor, targetFloor },
    }: ReturnType<typeof applicationAddPassengerAction>
  ) => {
    const floorsCount = draftState.floorsCount;
    if (
      initialFloor == null ||
      targetFloor == null ||
      initialFloor === targetFloor
    ) {
      [initialFloor, targetFloor] = generateRandomFloors(floorsCount - 1); // we start with floor 0
    }

    const id = uuidv4();
    draftState.passengers[id] = {
      id,
      initialFloor,
      targetFloor,
      inElevator: false,
    };
  }
);
