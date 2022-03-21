import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl } from '@angular/forms';
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
 
 
  //serializedDate = new FormControl((new Date()).toISOString());

  constructor(public dialogRef: MatDialogRef<DialogEditTaskInfoComponent>, private firestore: AngularFirestore) { 
    
  }

  ngOnInit(): void {
    this.firestore
      .collection('users')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        this.allUsers = changes;
      });

      console.log(' due date' , this.task.dueDate);
      //console.log('due date is ', new Date(this.task.dueDate).toLocaleString("en-US") );
      console.log('due date iso string ', new Date(this.task.dueDate).toISOString());
      this.date = new FormControl(new Date(this.task.dueDate).toISOString());
      //this.date = new FormControl(new Date(this.task.dueDate).toLocaleString("en-US"));
     
  }

  saveTaskInfo() {
    this.task.dueDate = this.dueDate.getTime();
    //this.task.userName = this.selectedValue;

    this.firestore
      .collection('tasks')
      .doc(this.taskId)
      .update(this.task.toJSON())
      .then(() => {
        this.dialogRef.close();
      });
  }
}
