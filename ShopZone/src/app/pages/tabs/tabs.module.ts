import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {TabsPage} from './tabs.page';
import {TranslateModule} from '@ngx-translate/core';
import {AuthGuard} from '../../guard/auth.guard';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'notizie',
                children: [
                    {
                        path: ':id',
                        loadChildren: '../dettaglio/dettaglio.module#DettaglioPageModule'
                    },
                    {
                        path: '',
                        loadChildren: '../notizie/notizie.module#NotiziePageModule',
                        pathMatch: 'full'
                    }
                ]
            },
            {
                path: 'preferiti',
                children: [
                    {
                        path: '',
                        loadChildren: '../preferiti/preferiti.module#PreferitiPageModule'
                    }
                ],
                canActivateChild: [AuthGuard]
            },
            {
                path: 'impostazioni',
                children: [
                    {
                        path: '',
                        loadChildren: '../impostazioni/impostazioni.module#ImpostazioniPageModule'
                    }
                ]
            },
            {
                path: 'negozio',
                children: [
                    {
                        path: ':id',
                        loadChildren: '../dettaglio-negozio/dettaglio-negozio.module#DettaglioNegozioPageModule'
                    }
                ],
                canActivate: [AuthGuard]
            },
            {
                path: 'aggiungi',
                children: [
                    {
                        path: '',
                        loadChildren: '../nuovanotizia/nuovanotizia.module#NuovanotiziaPageModule'
                    }
                ],
                canActivate: [AuthGuard]
            },
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: '../negoziante-home/negoziante-home.module#NegozianteHomePageModule'
                    }
                ],
                canActivate: [AuthGuard]
            },
            {
                path: '',
                loadChildren: '../notizie/notizie.module#NotiziePageModule',
                pathMatch: 'full',
                canActivate: [AuthGuard]
            }
        ]
    }
];


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TranslateModule.forChild(),
        RouterModule.forChild(routes)
    ],
    declarations: [TabsPage]
})
export class TabsPageModule {
}
