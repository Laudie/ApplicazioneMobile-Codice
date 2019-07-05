import {Utente} from './utente.model';

export class Notizia {
    id: number;
    titolo: string;
    immagine: string;
    descrizione: string;
    dataPubblicazione: string;
    pubblicatoDa: Utente;

}
