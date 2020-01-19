import {Negozio} from './negozio.model';
import {Utente} from './utente.model';

export class Notizia {
    id: number;
    titolo: string;
    immagine: string;
    descrizione: string;
    dataPubblicazione: string;
    idNegozio: number;
    immagineNegozio: string;
    nomeNegozio: string;
    numeroPiace: number;
    piace: boolean;
}
