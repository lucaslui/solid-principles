export class Rectangle {
  private _height: number;
  private _width: number;

  get height(): number {
    return this._height;
  }
  set height(value: number) {
    this._height = value;
  }

  get width(): number {
    return this._width;
  }
  set width(value: number) {
    this._width = value;
  }

  get area(): number {
    return this.height * this.width;
  }
}
