import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'tabs', pathMatch: 'full'},
    {path: 'login', loadChildren: './pages/login/login.module#LoginPageModule'},
    {path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule'},
    {path: 'dettaglio', loadChildren: './pages/dettaglio/dettaglio.module#DettaglioPageModule'}

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
