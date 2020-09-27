import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ProfilePage } from '@pages/profile/profile.page'
import { AuthService } from '@services/auth.service'

import { Validators } from '@angular/forms'
import { IFormOptions } from '@interfaces/form.interface'

@Component({
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss']
})
export class AuthPage implements OnInit {

  static route = 'auth'

  formOptions: IFormOptions

  isSignUp = false

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.buildForm()
  }

  onSubmit = (values: any) => {
    if (this.isSignUp) {
      this.authService.signUp(values)
    } else {
      this.authService.signIn(values)
    }
    this.onSuccess()
  }

  on

  getIsMemberText = () => this.isSignUp ? 'login' : 'register'
  
  toggleForm = () => {
    this.isSignUp = !this.isSignUp
    this.formOptions.buttonSubmitText = this.getFormButtonText()
  }

  private getFormButtonText = () => this.isSignUp ? 'start coding now' : 'login'

  private onSuccess = () => this.router.navigateByUrl(ProfilePage.route)

  private buildForm = () => {
    this.formOptions = {
      buttonSubmitText: this.getFormButtonText(),
      inputs: [
        { 
          name: 'email',
          type: 'email',
          placeholder: '*Your email', 
          initialValue: 'test@email.com',
          validators: [ Validators.required, Validators.email ],
          icon: 'far fa-envelope'
        },
        { 
          name: 'password',
          type: 'password',
          placeholder: '*Password', 
          validators: [ Validators.required ],
          icon: 'fas fa-lock'
        }
      ],
      onSubmit: this.onSubmit
    }
  }

}
