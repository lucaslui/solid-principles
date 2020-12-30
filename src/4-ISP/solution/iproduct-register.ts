export interface IProductRegister {
  dataValid(): boolean
  save(): Promise<void>
}