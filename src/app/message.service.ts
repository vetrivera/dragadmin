import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Imessage } from './message';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Http, Response} from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class MessageService {


  private _url: any = '/assets/data/data.json';
  private _url1: any = '/assets/data/message.json';
  private _url2: any = '/assets/data/scans.json';
  private _url4: any = '/assets/data/chart.json';


  constructor(private http: HttpClient) { }

  getmessage(): Observable<Imessage[]> {
  return this.http.get<Imessage[]>(this._url1);
 }


 getid( ) {
 return this.http.get(this._url);
}

getscans(): Observable<Imessage[]> {
return this.http.get<Imessage[]>(this._url2);
}


chart(): Observable<Imessage[]> {
return this.http.get<Imessage[]>(this._url4);
}

line() {
  return this.http.get('/assets/data/chart1.json');
    }
line1() {
  return this.http.get('/assets/data/linechart1.json');
    }
barchart() {
  return this.http.get('/assets/data/barchart.json');
    }
barchart1() {
  return this.http.get('/assets/data/barchart1.json');
}
table() {
  return this.http.get('https://jsonplaceholder.typicode.com/todos');
}

}
