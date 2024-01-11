import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public description?: SafeHtml;

  constructor(
    private appService: AppService
    ) {}

  ngOnInit(): void {
    this.appService?.getData("description").then(result => {
      this.description = result.description;
    });
  }

}
