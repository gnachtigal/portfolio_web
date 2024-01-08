import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public data?: DataResult;
  private httpClient: HttpClient;
  
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getData(): Promise<DataResult> {
    return new Promise<DataResult>((resolve, reject) => {
      this.httpClient.get<DataResult>('/resume').subscribe(result => {
        this.data = result;
        resolve(result);
      }, error => {
        console.error(error);
        reject(error);
      });
    });
  }
}


interface DataResult {
  data: SafeHtml;
}