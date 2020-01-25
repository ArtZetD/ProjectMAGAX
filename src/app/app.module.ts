import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FavService } from './fav.service';
import { BasketComponent } from './basket/basket.component';
import { ShopsComponent } from './shops/shops.component';
import { CrutchComponent } from './crutch/crutch.component';
import { dogService } from './dog.service';
import { SalesComponent } from './sales/sales.component';






@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    BasketComponent,
    ShopsComponent,
    CrutchComponent,
    SalesComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [FavService,dogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

