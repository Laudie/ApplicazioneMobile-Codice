import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';


import {URL} from '../constants';
import {Notizia} from '../model/notizia.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class NotiziaService {

    constructor(private http: HttpClient) {
    }

    list(): Observable<Notizia[]> {
        return this.http.get<Notizia[]>(URL.NOTIZIE);
    }

    findById(notiziaId: number): Notizia {
        const n: Notizia = new Notizia();
        if (notiziaId === 5555) {
            n.id = 5555;
            n.nome = 'Sconto 50%!!!';
            n.immagine = 'assets/images/Modello.jpg';
            n.descrizione = 'Sconto del 50% su tutta la collezione primavera estate!! Affrettatevi';
            n.dataPubblicazione = '05/05/19';
            n.pubblicatoDa = 'Freeway SRL';
            return n;
        } else {
            n.id = 1111;
            n.nome = 'Nuovi Arrivi';
            n.immagine = 'assets/images/Modello2.jpg';
            n.descrizione = 'Collezione Levis, appena arrivata in negozio. Vi ricordiamo che sabato e domenica saremo aperti';
            n.dataPubblicazione = '05/07/19';
            n.pubblicatoDa = 'Sotto Sopra';
            return n;
        }
    }

    // VECCHIO METODO
    /* findById(notiziaId: number): Observable<Notizia> {
         const apiURL = `${URL.NOTIZIE}/${notiziaId}`;
         return this.http.get<Notizia>(apiURL);
     }
     */
}
