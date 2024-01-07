import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from '../../components/description/description.component';
import { PlaygroundComponent } from '../../components/playground/playground.component';
import { ChangelogComponent } from '../../components/changelog/changelog.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    ChangelogComponent,
    PlaygroundComponent,
    DescriptionComponent
  ],
  imports: [
    CommonModule, 
  ]
})
export class HomeModule { }
