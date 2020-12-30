export class CPFServices {
  constructor() {}

  static isValid(cpf: string): boolean {
    return cpf.length === 14;
  }
}
