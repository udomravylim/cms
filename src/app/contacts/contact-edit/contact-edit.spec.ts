import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEdit } from './contact-edit';

describe('ContactEdit', () => {
  let component: ContactEdit;
  let fixture: ComponentFixture<ContactEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
