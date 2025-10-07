import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageEdit } from './message-edit';

describe('MessageEdit', () => {
  let component: MessageEdit;
  let fixture: ComponentFixture<MessageEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
