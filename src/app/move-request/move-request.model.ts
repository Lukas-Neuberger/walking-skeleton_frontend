export interface MoveRequest {
  id?: number;
  name: string;
  oldAddress: string;
  newAddress: string;
  date: Date;
}
