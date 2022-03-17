import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/models/task.class';
import { DialogEditTaskInfoComponent } from '../dialog-edit-task-info/dialog-edit-task-info.component';
import { DialogEditTaskNameComponent } from '../dialog-edit-task-name/dialog-edit-task-name.component';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  taskId: any = '';
  task: Task = new Task();
  colors = ['#52df9c9e', '#dcb73bab', '#ab8de6b5'];
  bgColor: number = 1;

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.taskId = paramMap.get('id2');
      console.log('got task id ', this.taskId);
      this.getTask();
    })
  }

  getTask() {
    this.firestore
    .collection('tasks')
    .doc(this.taskId)
    .valueChanges()
    .subscribe((task: any) => {
      this.task = new Task(task);
      console.log('retrived task ', this.task);
    })
  }

  saveNote() {
      this.bgColor = Math.floor(Math.random() * 3);
      console.log('number is' , this.bgColor);
    return this.bgColor;
  }

  editTaskName() {
      const dialog = this.dialog.open(DialogEditTaskNameComponent);
      dialog.componentInstance.task = new Task(this.task.toJSON());
      dialog.componentInstance.taskId = this.taskId;
  }

  editTaskInfo() {
    const dialog = this.dialog.open(DialogEditTaskInfoComponent);
    dialog.componentInstance.task = new Task(this.task.toJSON());
    dialog.componentInstance.taskId = this.taskId;
}

}
