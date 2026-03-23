import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskHeader } from './desk-header';

describe('DeskHeader', () => {
  let component: DeskHeader;
  let fixture: ComponentFixture<DeskHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeskHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeskHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
