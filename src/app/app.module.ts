import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FavService } from './fav.service';
import { BasketComponent } from './basket/basket.component';






@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    MainComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    BasketComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [FavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
