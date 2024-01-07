import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { InspectModule } from './inspect/inspect.module';
import { AboutModule } from './about/about.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { InspectComponent } from './inspect/inspect.component';

@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    InspectComponent
  ],
  imports: [
    CommonModule, AboutModule, HomeModule, InspectModule
  ]
})
export class PagesModule { }
