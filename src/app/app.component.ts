import { Component } from '@angular/core';
import { AppModule } from './app.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [AppModule, RouterOutlet],
})
export class AppComponent {
  title = 'portfolio';
}
