import {Negozio} from './negozio.model';

export class Notizia {
    id: number;
    titolo: string;
    immagine: string;
    descrizione: string;
    dataPubblicazione: string;
    numeroPiace: number;
    piace: boolean;
    negozio: Negozio;
}
