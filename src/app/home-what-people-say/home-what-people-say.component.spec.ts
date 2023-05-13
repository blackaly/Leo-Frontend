import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWhatPeopleSayComponent } from './home-what-people-say.component';

describe('HomeWhatPeopleSayComponent', () => {
  let component: HomeWhatPeopleSayComponent;
  let fixture: ComponentFixture<HomeWhatPeopleSayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWhatPeopleSayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeWhatPeopleSayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
