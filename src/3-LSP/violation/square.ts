import { Rectangle } from "./rectangle";

export class Square extends Rectangle {

  get height(): number {
    return super.height;
  }
  
  set height(value: number) {
    super.height = super.width = value;
  } 

  get width(): number {
    return super.width;
  }

  set width(value: number) {
    super.width = super.height = value;
  }
}
