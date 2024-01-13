import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private httpClient: HttpClient;
  
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getProfileData(section: string): Promise<Profile> {
    return new Promise<Profile>((resolve, reject) => {
      this.httpClient.get<Profile>(`api/Profile?section=${section}`).subscribe(result => {
        resolve(result);
      }, error => {
        console.error(error);
        reject(error);
      });
    });
  }

  getChangelog(): Promise<Changelog> {
    return new Promise<Changelog>((resolve, reject) => {
      this.httpClient.get<Changelog>(`api/Profile/Changelog`).subscribe(result => {
        resolve(result);
      }, error => {
        console.error(error);
        reject(error);
      });
    });
  }
}


interface Profile {
  description: SafeHtml;
}

interface Changelog {
  changes: SafeHtml;
}