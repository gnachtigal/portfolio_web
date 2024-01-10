import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public resumeData?: SafeHtml;

  constructor(
    private appService: AppService
    ) {}

  ngOnInit(): void {
    this.appService?.getData().then(result => {
      this.resumeData = result.description;
    });
  }

}
