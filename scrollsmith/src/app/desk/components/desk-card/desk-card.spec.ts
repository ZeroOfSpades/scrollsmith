import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskCard } from './desk-card';

describe('DeskCard', () => {
  let component: DeskCard;
  let fixture: ComponentFixture<DeskCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeskCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeskCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
