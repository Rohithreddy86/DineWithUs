import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './shared/main-header/main-header.component';

import { DevExtremeModule } from 'devextreme-angular';
import { from } from 'rxjs';
import { ScrollingContentComponent } from './components/scrolling-content/scrolling-content.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FeaturedComponent } from './pages/featured/featured.component';
import { MostRecentComponent } from './pages/most-recent/most-recent.component';
import { CommingSoonComponent } from './pages/comming-soon/comming-soon.component';
import { TopViewedComponent } from './pages/top-viewed/top-viewed.component';
import { AboutUSComponent } from './components/support/about-us/about-us.component';
import { AboutDEVComponent } from './components/support/about-dev/about-dev.component';
import { FeedbackComponent } from './components/support/feedback/feedback.component';
import { DummyComponent } from './components/dummy/dummy.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    ScrollingContentComponent,
    MainContentComponent,
    FooterComponent,
    FeaturedComponent,
    MostRecentComponent,
    CommingSoonComponent,
    TopViewedComponent,
    AboutUSComponent,
    AboutDEVComponent,
    FeedbackComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevExtremeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
