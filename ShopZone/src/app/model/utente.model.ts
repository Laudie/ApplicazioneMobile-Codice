import {Negozio} from './negozio.model';

export class Utente {

    username: string;
    nome: string;
    cognome: string;
    email: string;
    ruolo: string;
    password: string;
    // tslint:disable-next-line:variable-name
    id_negozio: Negozio;
}
