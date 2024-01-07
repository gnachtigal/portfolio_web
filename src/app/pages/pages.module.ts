import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { InspectModule } from './inspect/inspect.module';
import { AboutModule } from './about/about.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule, RouterModule, AboutModule, HomeModule, InspectModule
  ],
})
export class PagesModule { }
