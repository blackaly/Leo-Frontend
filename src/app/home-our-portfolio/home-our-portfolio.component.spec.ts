import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOurPortfolioComponent } from './home-our-portfolio.component';

describe('HomeOurPortfolioComponent', () => {
  let component: HomeOurPortfolioComponent;
  let fixture: ComponentFixture<HomeOurPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOurPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeOurPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
