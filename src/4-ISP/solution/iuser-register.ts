export interface IUserRegister {
  dataValid(): boolean
  save(): Promise<void>
  sendEmail() : Promise<void>
}