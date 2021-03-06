import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {TabsPage} from './tabs.page';
import {TranslateModule} from '@ngx-translate/core';
import {AuthGuard} from '../../guard/auth.guard';
import {NotiziaModalPageModule} from '../notizia-modal/notizia-modal.module';

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
                        loadChildren: '../notizia-dettaglio/notizia-dettaglio.module#NotiziaDettaglioPageModule'
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
                canActivate: [AuthGuard],
                children: [
                    {
                        path: '',
                        loadChildren: '../preferiti/preferiti.module#PreferitiPageModule'
                    }
                ]
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
                        loadChildren: '../negozio-dettaglio/negozio-dettaglio.module#NegozioDettaglioPageModule'
                    }
                ]
            }
            ,
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
        NotiziaModalPageModule,
        TranslateModule.forChild(),
        RouterModule.forChild(routes)
    ],
    declarations: [TabsPage]
})
export class TabsPageModule {
}
