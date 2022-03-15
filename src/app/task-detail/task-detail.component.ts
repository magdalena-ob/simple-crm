import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/models/task.class';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  taskId: any = '';
  task: Task = new Task();

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore) { }

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

}
