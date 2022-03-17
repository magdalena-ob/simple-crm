import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditTaskNameComponent } from './dialog-edit-task-name.component';

describe('DialogEditTaskNameComponent', () => {
  let component: DialogEditTaskNameComponent;
  let fixture: ComponentFixture<DialogEditTaskNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditTaskNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditTaskNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
