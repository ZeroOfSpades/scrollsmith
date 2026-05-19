import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRouter } from './app-router';

describe('AppRouter', () => {
  let component: AppRouter;
  let fixture: ComponentFixture<AppRouter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRouter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppRouter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
