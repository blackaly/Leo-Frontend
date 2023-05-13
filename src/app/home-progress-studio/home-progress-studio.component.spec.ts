import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProgressStudioComponent } from './home-progress-studio.component';

describe('HomeProgressStudioComponent', () => {
  let component: HomeProgressStudioComponent;
  let fixture: ComponentFixture<HomeProgressStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProgressStudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeProgressStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
