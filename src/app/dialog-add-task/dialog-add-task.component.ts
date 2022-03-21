import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/models/task.class';



@Component({
  selector: 'app-dialog-add-task',
  templateUrl: './dialog-add-task.component.html',
  styleUrls: ['./dialog-add-task.component.scss']
})
export class DialogAddTaskComponent implements OnInit {
  task = new Task();
  dueDate!: Date;
  allUsers: any = [];
  userId: any = '';
  selectedValue!: string;
  minDate = new Date();


  constructor(public dialogRef: MatDialogRef<DialogAddTaskComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
      .collection('users')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        this.allUsers = changes;
      }); 
  }

  saveTask() {
    this.task.dueDate = this.dueDate.getTime();
    this.task.userName = this.selectedValue;

    this.firestore
      .collection('tasks')
      .add(this.task.toJSON())
      .then((result: any) => {
        console.log('finished adding task ', result);
        this.dialogRef.close();
        console.log('task is for' , this.selectedValue);
      });

  }

}
