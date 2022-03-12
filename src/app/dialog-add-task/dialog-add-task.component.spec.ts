import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddTaskComponent } from './dialog-add-task.component';

describe('DialogAddTaskComponent', () => {
  let component: DialogAddTaskComponent;
  let fixture: ComponentFixture<DialogAddTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
