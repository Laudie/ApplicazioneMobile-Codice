import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URL} from '../constants';
import {Negozio} from '../model/negozio.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NegozioService {

  constructor(private http: HttpClient) {
  }
  findById(negozioId: number): Observable<Negozio> {
    const apiURL = `${URL.NEGOZIO}/${negozioId}`;
    return this.http.get<Negozio>(apiURL);
  }
}
