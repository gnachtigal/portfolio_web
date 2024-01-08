import { Component, Input, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  @Input() resumeData?: SafeHtml;

  constructor() { }

  ngOnInit(): void {
    console.log(this.resumeData);
  }

}
