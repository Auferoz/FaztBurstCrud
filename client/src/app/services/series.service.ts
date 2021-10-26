import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from '../models/serie';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  baseURL = environment.apiURL + '3/tv/';
  constructor(private http: HttpClient) { }

  getSerie(serieId: string): Observable<Serie> {
    const apiKey = '?api_key=457643c75832b5d6f6c66e10f260618b';
    const url = this.baseURL + serieId + apiKey;
    return this.http.get<Serie>(url);
  }
}
