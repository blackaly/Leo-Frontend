import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteNavBarComponent } from './complete-nav-bar.component';

describe('CompleteNavBarComponent', () => {
  let component: CompleteNavBarComponent;
  let fixture: ComponentFixture<CompleteNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
