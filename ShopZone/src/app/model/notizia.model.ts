import {Utente} from './utente.model';

export class Notizia {
    id: number;
    nome: string;
    descrizione: string;
    dataPubblicazione: Date;
    pubblicatoDa: Utente;

}
