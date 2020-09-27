import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'

import { AuthPage } from '@pages/auth/auth.page'
import { ProfilePage } from '@pages/profile/profile.page'

import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { FormComponent } from './components/common/form/form.component'


@NgModule({
  declarations: [
    AppComponent,
    AuthPage,
    ProfilePage,
    HeaderComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
