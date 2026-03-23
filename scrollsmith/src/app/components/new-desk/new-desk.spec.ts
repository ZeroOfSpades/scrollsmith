import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDesk } from './new-desk';

describe('NewDesk', () => {
  let component: NewDesk;
  let fixture: ComponentFixture<NewDesk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewDesk]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDesk);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
