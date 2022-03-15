import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/models/task.class';
import { DialogAddTaskComponent } from '../dialog-add-task/dialog-add-task.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  task = new Task();
  allTasks: any = [];

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
      .collection('tasks')
      .valueChanges()
      .subscribe((changes) => {
        this.allTasks = changes;
        console.log('all tasks are ', this.allTasks);
      });

  }

  openDialog() {
    this.dialog.open(DialogAddTaskComponent);
  }

}
