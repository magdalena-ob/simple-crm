import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {
  user: User = new User();
  userId: any = '';
  birthDate!: Date;
  loading = false;

  email = new FormControl('', [Validators.required, Validators.email]);


  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.firestore
    .collection('users')
    .doc(this.userId)
    .update(this.user.toJSON())
    .then(() => {
      this.loading = true;
      this.dialogRef.close();
    });
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter your email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
