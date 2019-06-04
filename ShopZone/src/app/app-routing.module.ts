import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'tabs/notizie',
        pathMatch: 'full'
    },
    {
        path: 'notizie',
        loadChildren: './pages/login/login.module#NotiziePageModule'
    },
    {
        path: 'login',
        loadChildren: './pages/login/login.module#LoginPageModule'
    },
    {
        path: 'tabs',
        loadChildren: './pages/tabs/tabs.module#TabsPageModule'
    },
    {path: 'impostazioni', loadChildren: './pages/impostazioni/impostazioni.module#ImpostazioniPageModule'},
    {path: 'preferiti', loadChildren: './pages/preferiti/preferiti.module#PreferitiPageModule'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
