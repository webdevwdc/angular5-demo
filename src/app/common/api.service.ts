
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  public getJSON(path: string): Observable<any> {
    return this.http.get(path)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public extractData(res: Response | any): Observable<any> {
    return res.json();
  }

  public handleError(error: Response | any): Observable<any> {
    return Observable.throw(JSON.parse(error._body));
    // return Observable.throw(error.message || error);
  }

}
