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

  constructor(public dialogRef: MatDialogRef<DialogEditTaskInfoComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
      .collection('users')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        this.allUsers = changes;
      });
  }

  saveTaskInfo() {
    this.firestore
      .collection('tasks')
      .doc(this.taskId)
      .update(this.task.toJSON())
      .then(() => {
        this.dialogRef.close();
      });
  }

}
