import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthPage } from '@pages/auth/auth.page'
import { ProfilePage } from '@pages/profile/profile.page'


const routes: Routes = [
  { path: AuthPage.route, component: AuthPage },
  { path: ProfilePage.route, component: ProfilePage },
  { path: '**', redirectTo: AuthPage.route, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
