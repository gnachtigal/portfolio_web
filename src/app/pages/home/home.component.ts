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
  public changelog?: SafeHtml;

  constructor(
    private appService: AppService
    ) {}

  ngOnInit(): void {
    this.appService?.getProfileData("description").then(result => {
      this.description = result.description;
    });

    this.appService?.getChangelog().then(result => {
      this.changelog = result.changes;
    });
  }
}
