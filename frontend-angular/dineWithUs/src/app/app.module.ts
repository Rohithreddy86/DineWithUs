import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './shared/main-header/main-header.component';

import { DxButtonModule } from 'devextreme-angular';
import { DxToolbarModule } from 'devextreme-angular'; 
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
