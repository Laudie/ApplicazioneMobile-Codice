import {Injectable} from '@angular/core';
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

    search(citta: string): Observable<Negozio[]> {
        return this.http.get<Negozio[]>(URL.NEGOZIO, {
            params: {
                citta
            }
        });
    }

    preferiti(): Observable<Negozio[]> {
        return this.http.get<Negozio[]>(URL.PREFERITI);
    }

    nuovoNegozio(nuovoNegozio: Negozio) {
        return this.http.post<Negozio>(URL.NUOVO_NEGOZIO, nuovoNegozio);
    }

    modificaNegozio(negozio: Negozio, negozioId: number) {
        const apiURL = `${URL.NEGOZIO}/${negozioId}`;
        return this.http.put<Negozio>(apiURL, negozio);
    }

    eliminaNegozio(negozioId: number) {
        const apiURL = `${URL.NEGOZIO}/${negozioId}`;
        return this.http.delete(apiURL);
    }

    aggiungiPreferito(negozioId: number): Observable<Negozio> {
        const apiURL = `${URL.NEGOZIO}/${negozioId}/preferito`;
        return this.http.post<Negozio>(apiURL, null);
    }

    rimuoviPreferito(negozioId: number) {
        const apiURL = `${URL.NEGOZIO}/${negozioId}/preferito`;
        return this.http.delete(apiURL);
    }
}
