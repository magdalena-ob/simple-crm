import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';

interface User {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dialog-add-task',
  templateUrl: './dialog-add-task.component.html',
  styleUrls: ['./dialog-add-task.component.scss']
})
export class DialogAddTaskComponent implements OnInit {
  allUsers :any = [];
  
  selectedValue: string | undefined;

  users: User[] = [
    {value: 'User1', viewValue: 'User1'},
    {value: 'User2', viewValue: 'User2'},
    {value: 'User2', viewValue: 'User3'},
  ];


  constructor(public dialogRef: MatDialogRef<DialogAddTaskComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
    .collection('users')
    .valueChanges({idField: 'customIdName'})
    .subscribe((changes: any) => {
      this.allUsers = changes;
    });
  }

  saveTask() {

  }

}
