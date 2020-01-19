import {Injectable} from '@angular/core';


import {URL} from '../constants';
import {Notizia} from '../model/notizia.model';
import {Observable} from 'rxjs';
import {Negozio} from '../model/negozio.model';
import {HttpClient, HttpParams} from '@angular/common/http';

export interface NuovaNotizia {
    titolo: string;
    descrizione: string;
    immagine: string;
    dataPubblicazione: Date;
    pubblicatoDa: Negozio;
}

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

    search(citta: string): Observable<Negozio[]> {
        return this.http.get<Negozio[]>(URL.NEGOZIO, {
            params: {
                citta
            }
        });
    }

    miPiace(idNotizia: number, piace: number) {
        const apiURL = `${URL.NOTIZIE}/${idNotizia}/${piace}`;
        this.http.put(apiURL, {
            param: {
                piace
            }}).subscribe(
            (val) => {
                console.log('POST call succesfull value returned in body', val);
            },
            response => {
                console.log('POST call in error', response);
            },
            () => {
                console.log('The POST observable is now completed');
            });
    }

    nuovaNotizia(nuovaNotizia: NuovaNotizia) {
        this.http.post<Notizia[]>(URL.NUOVA_NOTIZIA,
            nuovaNotizia);
    }

}
