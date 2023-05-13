import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsAboutTestiComponent } from './about-us-about-testi.component';

describe('AboutUsAboutTestiComponent', () => {
  let component: AboutUsAboutTestiComponent;
  let fixture: ComponentFixture<AboutUsAboutTestiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsAboutTestiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsAboutTestiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
