import { Component, Input, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss']
})
export class ChangelogComponent implements OnInit {
  @Input() changes?: SafeHtml;

  constructor() { }

  ngOnInit(): void {
  }

}
