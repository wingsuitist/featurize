import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Feature } from '../shared'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FeatureService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private featuresUrl = 'http://localhost:3000/features/'

  constructor(private http: Http) { }

  getFeatures(): Observable<Feature[]> {
    return this.http.get(this.featuresUrl)
      .map(response => response.json().map(feature => new Feature(feature)))
      .catch(this.handleError);
  }

  getFeature(id: number): Observable<Feature> {
    return this.http.get(this.featuresUrl + id)
      .map(response => response.json())
      .catch(this.handleError);
  }

  delete(id: number): Observable<Feature> {
    return this.http.delete(this.featuresUrl + id, { headers: this.headers })
      .map(response => response.json())
      .catch(this.handleError);
  }

  add(feature: Feature): Observable<Feature> {
    return this.http
      .post(this.featuresUrl,
        JSON.stringify(feature),
        { headers: this.headers })
      .map(response => response.json())
      .catch(this.handleError);
  }

  update(feature: Feature): Observable<Feature> {
    return this.http
      .put(this.featuresUrl + feature.id,
        JSON.stringify(feature),
        { headers: this.headers })
      .map(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
