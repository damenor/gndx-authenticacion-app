import { Component, Input, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { IFormOptions, IFormInputOptions } from '@interfaces/form.interface'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() options: IFormOptions

  formGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm()
  }

  getError(controlName: string): string {
    let error = ''
    const control = this.formGroup.get(controlName)
    if (control.touched && control.errors != null) {
      error = 'El campo es requerido'
    }
    return error
  }

  private buildForm = () => {

    const formGroupObject = {}

    this.options.inputs.map(({ name, initialValue, validators }: IFormInputOptions) => {
      formGroupObject[name] = [initialValue, validators]
    })

    this.formGroup = this.formBuilder.group(formGroupObject)

    console.log(this.formGroup)

  }

}
