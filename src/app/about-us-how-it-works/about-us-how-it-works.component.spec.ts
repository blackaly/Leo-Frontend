import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsHowItWorksComponent } from './about-us-how-it-works.component';

describe('AboutUsHowItWorksComponent', () => {
  let component: AboutUsHowItWorksComponent;
  let fixture: ComponentFixture<AboutUsHowItWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsHowItWorksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
