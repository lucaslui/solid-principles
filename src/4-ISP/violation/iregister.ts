export interface IRegister {
  dataValid(): boolean
  save(): Promise<void>
  sendEmail() : Promise<void>
}