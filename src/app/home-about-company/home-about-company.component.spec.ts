import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAboutCompanyComponent } from './home-about-company.component';

describe('HomeAboutCompanyComponent', () => {
  let component: HomeAboutCompanyComponent;
  let fixture: ComponentFixture<HomeAboutCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAboutCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAboutCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
