import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/models/task.class';

@Component({
  selector: 'app-dialog-edit-task-info',
  templateUrl: './dialog-edit-task-info.component.html',
  styleUrls: ['./dialog-edit-task-info.component.scss']
})
export class DialogEditTaskInfoComponent implements OnInit {

  task: Task = new Task();
  taskId: any = '';
  dueDate!: Date;
  allUsers: any = [];
  userId: any = '';
  selectedValue!: string;
  minDate = new Date();
  date: any;

  constructor(public dialogRef: MatDialogRef<DialogEditTaskInfoComponent>, private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.firestore
      .collection('users')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        this.allUsers = changes;
      });

    this.setDateValue();
  }

  saveTaskInfo() {
    this.task.dueDate = this.date.getTime();
    //this.task.userName = this.selectedValue;

    this.firestore
      .collection('tasks')
      .doc(this.taskId)
      .update(this.task.toJSON())
      .then(() => {
        this.dialogRef.close();
      });
  }

  setDateValue() {
    console.log(' due date', this.task.dueDate);
    console.log('due date iso string ', new Date(this.task.dueDate).toISOString());

    this.date = new Date(this.task.dueDate).toISOString();
  }
}
