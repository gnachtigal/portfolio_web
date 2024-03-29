import {Routes} from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {InspectComponent} from './pages/inspect/inspect.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent, loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  {path: 'about', component: AboutComponent},
  {path: 'inspect', component: InspectComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];