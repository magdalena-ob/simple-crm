import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/models/note.class';
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
  note: Note = new Note();
  notes: any = [];

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public dialog: MatDialog, private router: Router,) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.taskId = paramMap.get('id2');
      console.log('got task id ', this.taskId);
      this.getTask();
    })

    this.getNotes();
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
    this.firestore
      .collection('tasks')
      .doc(this.taskId)
      .collection('notes')
      .add(this.note.toJSON())
      .then((result: any) => {
        console.log('finished adding notes ', result);
        this.note.message = '';
      })
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

  getNotes() {
    this.firestore
      .collection('tasks')
      .doc(this.taskId)
      .collection('notes')
      .valueChanges({idField: 'noteID'})
      .subscribe((changes) => {
        this.notes = changes;
        console.log('notes ', this.notes);
      })
  }

  removeNote(index: any) {
    let currentNoteID = this.notes[index].noteID;
    console.log('current note Id ', currentNoteID);

    this.firestore
      .collection('tasks')
      .doc(this.taskId)
      .collection('notes')
      .doc(currentNoteID)
      .update({
        active: false
      })
  }

}
