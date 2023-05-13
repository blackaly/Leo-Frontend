import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProjectsHomeComponent } from './our-projects-home.component';

describe('OurProjectsHomeComponent', () => {
  let component: OurProjectsHomeComponent;
  let fixture: ComponentFixture<OurProjectsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurProjectsHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurProjectsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
