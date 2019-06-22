import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {TabsPage} from './tabs.page';
import {TranslateModule} from '@ngx-translate/core';

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
                    }]
            },
            {
                path: 'impostazioni',
                children: [
                    {
                        path: '',
                        loadChildren: '../impostazioni/impostazioni.module#ImpostazioniPageModule'
                    }]
            },
            {
                path: '',
                redirectTo: '/tabs/notizie',
                pathMatch: 'full'
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
