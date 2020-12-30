import { Rectangle } from "./rectangle";

export class Square extends Rectangle {

  private _side: number;

  get side(): number {
    return this._side;
  }
  
  set side(value: number) {
    this._side = value;
  }

  get area(): number {
    return this.side**2;
  }
}
