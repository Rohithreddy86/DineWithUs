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

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    ScrollingContentComponent,
    MainContentComponent,
    FooterComponent
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
