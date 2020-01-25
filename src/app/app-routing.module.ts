import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CrutchComponent } from './crutch/crutch.component';
import { RegistrationComponent } from './registration/registration.component';
import { BasketComponent } from './basket/basket.component';
import { ShopsComponent } from './shops/shops.component';
import { SalesComponent } from './sales/sales.component';




const routes: Routes = [
{path: 'contacts', component: ContactsComponent},
{path: '', component: MainComponent},
{path: 'registration', component: RegistrationComponent},
{path: 'basket', component: BasketComponent},
{path: 'shops', component: ShopsComponent},
{path: 'crutch', component: CrutchComponent},
{path: 'sales', component: SalesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
