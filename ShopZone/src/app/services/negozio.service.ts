import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URL} from '../constants';
import {Negozio} from '../model/negozio.model';
import {Observable} from 'rxjs';

export interface NuovoNegozio {
    nome: string;
    descrizione: string;
    orario: string;
    categoria: string;
    giorni: string;
    piva: string;
    immagine: string;
    luogo: string;
}

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

    nuovoNegozio(nuovoNegozio: NuovoNegozio): void {
        this.http.post(URL.NUOVO_NEGOZIO, nuovoNegozio).subscribe(
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
}
