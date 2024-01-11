import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public profileData?: Profile;
  private httpClient: HttpClient;
  
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getData(section: string): Promise<Profile> {
    debugger;
    return new Promise<Profile>((resolve, reject) => {
      this.httpClient.get<Profile>(`api/Profile?section=${section}`).subscribe(result => {
        this.profileData = result;
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