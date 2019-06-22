import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild} from '@angular/router';
import {UtenteService} from '../services/utente.service';
import {NavController} from '@ionic/angular';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private utenteService: UtenteService, private navController: NavController) {
    }

    canActivate(): boolean {

        return this.utenteService.isLogged();
           /* .pipe(
                take(1),
                map((isLoggedIn: boolean) => {
                    console.log(isLoggedIn);
                    if (!isLoggedIn) {
                        this.navController.navigateRoot('login');
                        return false;
                    }
                    return true;
                })
            );*/
    }

    canActivateChild(): boolean {
        return this.canActivate();
    }

}
