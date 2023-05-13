import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsPhilosophyComponent } from './about-us-philosophy.component';

describe('AboutUsPhilosophyComponent', () => {
  let component: AboutUsPhilosophyComponent;
  let fixture: ComponentFixture<AboutUsPhilosophyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsPhilosophyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsPhilosophyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
