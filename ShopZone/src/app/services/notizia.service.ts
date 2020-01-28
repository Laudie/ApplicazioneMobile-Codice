import {Injectable} from '@angular/core';


import {URL} from '../constants';
import {Notizia} from '../model/notizia.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class NotiziaService {

    constructor(private http: HttpClient) {
    }

    list(): Observable<Notizia[]> {
        return this.http.get<Notizia[]>(URL.NOTIZIE);
    }


    findById(notiziaId: number): Observable<Notizia> {
        const apiURL = `${URL.NOTIZIE}/${notiziaId}`;
        return this.http.get<Notizia>(apiURL);
    }

    listaNotizie(negozioId: number): Observable<Notizia[]> {
        const apiURL = `${URL.NEGOZIO}/${negozioId}/notizie`;
        return this.http.get<Notizia[]>(apiURL);
    }
    nuovaNotizia(nuovaNotizia: Notizia) {
        return this.http.post<Notizia[]>(URL.NUOVA_NOTIZIA, nuovaNotizia);
    }


    modificaNotizia(notizia: Notizia , notiziaId: number) {
        const apiURL = `${URL.NOTIZIE}/${notiziaId}`;
        return this.http.put<Notizia>(apiURL, notizia);
    }

    eliminaNotizia(notiziaId: number) {
        const apiURL = `${URL.NOTIZIE}/${notiziaId}`;
        return this.http.delete<Notizia>(apiURL);
    }

    rimuoviPiace(notiziaId: number): Observable<Notizia> {
        const apiURL = `${URL.NOTIZIE}/${notiziaId}/piace`;
        return this.http.delete<Notizia>(apiURL);
    }

    miPiace(notiziaId: number): Observable<Notizia> {
        const apiURL = `${URL.NOTIZIE}/${notiziaId}/piace`;
        return this.http.post<Notizia>(apiURL, null);
    }
}
