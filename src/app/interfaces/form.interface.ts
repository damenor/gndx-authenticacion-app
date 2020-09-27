import { Validators } from '@angular/forms'

export interface IFormOptions {
  inputs: IFormInputOptions[],
  buttonSubmitText: string,
  onSubmit: (values) => any
}

export interface IFormInputOptions {
  name: string,
  icon: string,
  placeholder: string,
  initialValue?: string | number,
  type?: 'text' | 'number' | 'email' | 'password',
  validators?: Validators[]
}
