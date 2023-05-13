import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsAboutTeamComponent } from './about-us-about-team.component';

describe('AboutUsAboutTeamComponent', () => {
  let component: AboutUsAboutTeamComponent;
  let fixture: ComponentFixture<AboutUsAboutTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsAboutTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsAboutTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
