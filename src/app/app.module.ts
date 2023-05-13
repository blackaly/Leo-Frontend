import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SliderHeaderComponent } from './slider-header/slider-header.component';
import { FooterComponent } from './footer/footer.component';
import { FooterBottomComponent } from './footer-bottom/footer-bottom.component';
import { WhatPeopleSayComponent } from './what-people-say/what-people-say.component';
import { SliderComponent } from './slider/slider.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { OurProjectsHomeComponent } from './our-projects-home/our-projects-home.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { AboutUsHeaderComponent } from './about-us-header/about-us-header.component';
import { AboutUsCompanyComponent } from './about-us-company/about-us-company.component';
import { AboutUsPhilosophyComponent } from './about-us-philosophy/about-us-philosophy.component';
import { AboutUsContainerComponent } from './about-us-container/about-us-container.component';
import { AboutUsHowItWorksComponent } from './about-us-how-it-works/about-us-how-it-works.component';
import { AboutUsAboutTeamComponent } from './about-us-about-team/about-us-about-team.component';
import { AboutUsAboutTestiComponent } from './about-us-about-testi/about-us-about-testi.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { CompleteNavBarComponent } from './complete-nav-bar/complete-nav-bar.component';
import { HomeFeaturesComponent } from './home-features/home-features.component';
import { HomeBenefitsComponent } from './home-benefits/home-benefits.component';
import { HomeOurPortfolioComponent } from './home-our-portfolio/home-our-portfolio.component';
import { HomeAboutCompanyComponent } from './home-about-company/home-about-company.component';
import { HomeProgressStudioComponent } from './home-progress-studio/home-progress-studio.component';
import { HomeWhatPeopleSayComponent } from './home-what-people-say/home-what-people-say.component';
import { CustomerComponent } from './dashboard/customer/customer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SliderHeaderComponent,
    FooterComponent,
    FooterBottomComponent,
    WhatPeopleSayComponent,
    SliderComponent,
    SidePanelComponent,
    OurProjectsHomeComponent,
    AboutUsComponent,
    HomeComponent,
    AboutUsHeaderComponent,
    AboutUsCompanyComponent,
    AboutUsPhilosophyComponent,
    AboutUsContainerComponent,
    AboutUsHowItWorksComponent,
    AboutUsAboutTeamComponent,
    AboutUsAboutTestiComponent,
    PortfolioComponent,
    ContactComponent,
    CompleteNavBarComponent,
    HomeFeaturesComponent,
    HomeBenefitsComponent,
    HomeOurPortfolioComponent,
    HomeAboutCompanyComponent,
    HomeProgressStudioComponent,
    HomeWhatPeopleSayComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
