import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ScrollingContentComponent } from './components/scrolling-content/scrolling-content.component';

const routes: Routes = [
  { path: 'home',  component: MainContentComponent },
  { path: 'featured',  component: ScrollingContentComponent },
  { path: 'comingsoon', component: MainContentComponent},
  { path: 'mostrecent', component: MainContentComponent},
  { path: 'topviewed', component: MainContentComponent},
  { path: 'aboutus', component: MainContentComponent},
  { path: 'aboutdevs', component: MainContentComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
