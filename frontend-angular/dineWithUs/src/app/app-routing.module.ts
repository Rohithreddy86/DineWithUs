import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ScrollingContentComponent } from './components/scrolling-content/scrolling-content.component';
import { FeaturedComponent } from './pages/featured/featured.component';
import { MostRecentComponent } from './pages/most-recent/most-recent.component';
import { CommingSoonComponent } from './pages/comming-soon/comming-soon.component';
import { TopViewedComponent } from './pages/top-viewed/top-viewed.component';
import { AboutDEVComponent } from './components/support/about-dev/about-dev.component';
import { AboutUSComponent } from './components/support/about-us/about-us.component';



const routes: Routes = [
  { path: 'home',  component: MainContentComponent },
  { path: 'featured',  component: FeaturedComponent },
  { path: 'comingsoon', component: CommingSoonComponent},
  { path: 'mostrecent', component: MostRecentComponent},
  { path: 'topviewed', component: TopViewedComponent},
  { path: 'aboutus', component: AboutUSComponent},
  { path: 'aboutus/:id', component: AboutUSComponent},
  { path: 'aboutdevs', component: AboutDEVComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
