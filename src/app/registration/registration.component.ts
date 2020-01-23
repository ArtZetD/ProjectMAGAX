import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  ngOnInit() {
  }
  user: User = new User();
  constructor(
    public dialogRef: MatDialogRef<RegistrationComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: User
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
