import { createAction } from "typesafe-actions";
import { Passenger } from "../reducers/state";

type Payload = Partial<Omit<Passenger, "id">> & Pick<Passenger, "id">;

export const applicationUpdatePassengerAction = createAction(
  "@application/UPDATE_PASSENGER"
)<Payload>();
