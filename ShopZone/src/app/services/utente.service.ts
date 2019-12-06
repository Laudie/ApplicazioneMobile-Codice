import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

import {AUTH_TOKEN, URL, UTENTE_STORAGE, X_AUTH} from '../constants';
import {Utente} from '../model/utente.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface Account {
    username: string;
    password: string;

}
export interface NuovoUtente {
    nome: string;
    cognome: string;
    email: string;
    username: string;
    password: string;
}
@Injectable({
    providedIn: 'root'
})
export class UtenteService {
    private authToken: string;
    private loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private utente$: BehaviorSubject<Utente> = new BehaviorSubject<Utente>({} as Utente);

    constructor(private http: HttpClient, private storage: Storage) {

        this.storage.get(AUTH_TOKEN).then((token) => {
            console.log(token);
            this.authToken = token;
            if (token !== null && token !== undefined && token !== '') {
                this.loggedIn$.next(true);
            }
        });
        this.storage.get(UTENTE_STORAGE).then((utente) => {
            this.utente$.next(utente);
        });

    }

    login(account: Account): Observable<Utente> {
        return this.http.post<Utente>(URL.LOGIN, account, {observe: 'response'}).pipe(
            map((resp: HttpResponse<Utente>) => {
                const token = resp.headers.get(X_AUTH);
                this.storage.set(AUTH_TOKEN, token);
                this.authToken = token;
                // Utente memorizzato nello storage in modo tale che se si vuole cambiare il
                // profilo dell'utente stesso non si fa una chiamata REST.
                this.storage.set(UTENTE_STORAGE, resp.body);
                // update dell'observable dell'utente
                this.utente$.next(resp.body);
                this.loggedIn$.next(true);
                return resp.body;
            }));
    }

    logout() {
        this.authToken = null;
        this.loggedIn$.next(false);
        this.storage.remove(AUTH_TOKEN);
        this.storage.remove(UTENTE_STORAGE);
        // Nessuna chiamata al server perche' JWT e' stateless quindi non prevede alcun logout.
        // Per gestirlo si dovrebbe fare lato server una blacklist.
    }

    getUtente(): BehaviorSubject<Utente> {
        return this.utente$;
    }

    getAuthToken(): string {
        return this.authToken;
    }

    isLogged(): Observable<boolean> {
        return this.loggedIn$.asObservable();
    }
    nuovoUtente(nuovoUtente: NuovoUtente): void {
        this.http.post(URL.NUOVO_UTENTE,
            nuovoUtente)
            .subscribe(
        (val) => {console.log('POST call succesfull value returned in body', val);
        },
        response => {
            console.log('POST call in error', response);
        },
            () => {
            console.log('The POST observable is now completed');
            });
    }
    /* updateProfilo(nuovoUtente: Utente): Observable<Utente> {
         return this.http.post<Utente>(URL.UPDATE_PROFILO, nuovoUtente, {observe: 'response'}).pipe(
             map((resp: HttpResponse<Utente>) => {
                 // Aggiornamento dell'utente nello storage.
                 // Utente memorizzato nello storage per evitare chiamata REST quando si vuole modificare il profilo
                 // e se l'utente chiude la app e la riapre i dati sono gia' presenti
                 this.storage.set(UTENTE_STORAGE, resp.body);
                 // update dell'observable dell'utente
                 this.utente$.next(resp.body);
                 return resp.body;
             }));
     }*/
}
