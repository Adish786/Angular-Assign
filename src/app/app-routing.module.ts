import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { VerificationFormComponent } from './verification-form/verification-form.component';

const routes: Routes = [
    { path: '',   redirectTo: 'verify', pathMatch: 'full' }, // redirect to `first-component`
    { path: 'verify', component: VerificationFormComponent },
  ];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }