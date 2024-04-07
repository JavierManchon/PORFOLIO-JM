import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllComponent } from './pages/all/all.component';
import { AboutComponent } from './pages/about/about.component';
import { IntroductionComponent } from './layouts/introduction/introduction.component';
import { GithubComponent } from './layouts/github/github.component';
import { ArrowLinkComponent } from './components/arrow-link/arrow-link.component';
import { ProjectPokedexComponent } from './layouts/project-pokedex/project-pokedex.component';
import { ProjectUpgradeComponent } from './layouts/project-upgrade/project-upgrade.component';
import { LinkedinComponent } from './layouts/linkedin/linkedin.component';
import { FrontSkillsComponent } from './layouts/front-skills/front-skills.component';
import { BackSkillsComponent } from './layouts/back-skills/back-skills.component';
import { MapComponent } from './layouts/map/map.component';
import { ProjectGamevaultComponent } from './layouts/project-gamevault/project-gamevault.component';
import { CvComponent } from './layouts/cv/cv.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { LearningSkillsComponent } from './layouts/learning-skills/learning-skills.component';
import { ExpandedButtonsComponent } from './components/expanded-buttons/expanded-buttons.component';
import { ProjectUpcodeComponent } from './layouts/project-upcode/project-upcode.component';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    AboutComponent,
    IntroductionComponent,
    GithubComponent,
    ArrowLinkComponent,
    ProjectPokedexComponent,
    ProjectUpgradeComponent,
    LinkedinComponent,
    FrontSkillsComponent,
    BackSkillsComponent,
    MapComponent,
    ProjectGamevaultComponent,
    CvComponent,
    ContactComponent,
    LearningSkillsComponent,
    ExpandedButtonsComponent,
    ProjectUpcodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
