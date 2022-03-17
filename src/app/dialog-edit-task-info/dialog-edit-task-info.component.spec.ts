import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditTaskInfoComponent } from './dialog-edit-task-info.component';

describe('DialogEditTaskInfoComponent', () => {
  let component: DialogEditTaskInfoComponent;
  let fixture: ComponentFixture<DialogEditTaskInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditTaskInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditTaskInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
