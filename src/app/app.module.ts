import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { AppService } from './services/app.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TabsComponent
  ],
  imports: [
    CommonModule, 
    HttpClientModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TabsComponent
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
