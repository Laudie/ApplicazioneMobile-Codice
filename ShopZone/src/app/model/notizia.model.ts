import {Negozio} from './negozio.model';
import {Utente} from './utente.model';

export class Notizia {
    id: number;
    titolo: string;
    immagine: string;
    descrizione: string;
    dataPubblicazione: string;
    pubblicatoDa: Negozio;
    utentepiace: Set<Utente>;

}
