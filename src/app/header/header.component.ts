import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationComponent } from '../registration/registration.component';
import { User } from 'src/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  user: User = new User();
  ngOnInit() {
  }
  openDialog(): void {

    const dialogRef = this.dialog.open(RegistrationComponent, {
      width: '380px',
      height: '532px',
      data: this.user
    });

    dialogRef.afterClosed().subscribe(result => {
      this.user = result;
      console.log(this.user);
      
    });
  }
}

