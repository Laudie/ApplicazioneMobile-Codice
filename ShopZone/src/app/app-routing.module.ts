import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: './pages/tabs/tabs.module#NotiziePageModule', pathMatch: 'full'},
    {path: 'login', loadChildren: './pages/login/login.module#LoginPageModule'},
    {path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule'},
    {path: 'notizie', loadChildren: './pages/tabs/tabs.module#NotiziePageModule'},
    {path: 'impostazioni', loadChildren: './pages/tabs/tabs.module#ImpostazioniPageModule'},
    {path: 'preferiti', loadChildren: './pages/tabs/tabs.module#PreferitiPageModule'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
