import {Injectable} from '@angular/core';


import {URL} from '../constants';
import {Notizia} from '../model/notizia.model';
import {Observable} from 'rxjs';
import {Negozio} from '../model/negozio.model';
import {HttpClient} from '@angular/common/http';

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

    preferiti(): Observable<Notizia[]> {
        return this.http.get<Notizia[]>(URL.PREFERITI);
    }

    findById(notiziaId: number): Observable<Notizia> {
        const apiURL = `${URL.NOTIZIE}/${notiziaId}`;
        return this.http.get<Notizia>(apiURL);
    }

    search(luogo: string): Observable<Negozio[]> {
        return this.http.post<Negozio[]>(URL.NOTIZIE, luogo);
    }

    nuovaNotizia(nuovaNotizia: NuovaNotizia) {
        this.http.post<Notizia[]>(URL.NUOVA_NOTIZIA,
            nuovaNotizia);
    }

    getidNegozio(): Observable<number> {
        console.log('eccomi');
        return this.http.get<number>(URL.NUOVA_NOTIZIA);
    }

    /* createAppello(appello: Appello) {
         return this.http.post<Appello>(URL.APPELLI, appello);
     }*/
}
