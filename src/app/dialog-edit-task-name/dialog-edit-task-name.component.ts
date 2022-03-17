import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/models/task.class';

@Component({
  selector: 'app-dialog-edit-task-name',
  templateUrl: './dialog-edit-task-name.component.html',
  styleUrls: ['./dialog-edit-task-name.component.scss']
})
export class DialogEditTaskNameComponent implements OnInit {

  task: Task = new Task();
  taskId: any = '';
  dueDate!: Date;

  constructor(public dialogRef: MatDialogRef<DialogEditTaskNameComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  saveTaskName() {
    this.firestore
      .collection('tasks')
      .doc(this.taskId)
      .update(this.task.toJSON())
      .then(() => {
        this.dialogRef.close();
      });
  }

}
