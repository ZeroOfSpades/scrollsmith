import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskField } from './desk-field';

describe('DeskField', () => {
  let component: DeskField;
  let fixture: ComponentFixture<DeskField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeskField]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeskField);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
