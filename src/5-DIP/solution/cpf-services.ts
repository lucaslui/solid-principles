import { ICPFServices } from "./interfaces/icpf-services";

export class CPFServices implements ICPFServices {
  isValid(cpf: string): boolean {
    return cpf.length === 14;
  }
}
