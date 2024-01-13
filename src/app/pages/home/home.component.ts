import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { SafeHtml } from '@angular/platform-browser';
import { Commit } from '../../models/app.model.commit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public description?: SafeHtml;
  public commits?: Commit[];

  constructor(
    private appService: AppService
    ) {}

  ngOnInit(): void {
    this.appService?.getProfileData("description").then(result => {
      this.description = result.description;
    });

    this.appService?.getChangelog().then(result => {
      this.commits = result;
    });
  }
}
