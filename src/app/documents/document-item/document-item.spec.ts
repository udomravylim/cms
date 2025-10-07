import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentItem } from './document-item';

describe('DocumentItem', () => {
  let component: DocumentItem;
  let fixture: ComponentFixture<DocumentItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
