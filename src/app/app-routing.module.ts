import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { RegistrationComponent } from './registration/registration.component';



const routes: Routes = [
{path: 'contacts', component: ContactsComponent},
{path: '', component: MainComponent},
{path: 'about', component: AboutComponent},
{path: 'registration', component: RegistrationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
