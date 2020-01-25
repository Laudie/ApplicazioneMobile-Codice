import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'login',
        children: [
            {
                path: '',
                loadChildren: './pages/login/login.module#LoginPageModule'
            },
            {
                path: 'registrazione',
                loadChildren: './pages/registrazione/registrazione.module#RegistrazionePageModule'
            }]
    },
    {
        path: '',
        loadChildren: './pages/tabs/tabs.module#TabsPageModule'
    },
    {
        path: 'dummy',
        loadChildren: './pages/dummy/dummy.module#DummyPageModule'
    },
    {
        path: 'nuovanotizia',
        loadChildren: './pages/nuovanotizia/nuovanotizia.module#NuovanotiziaPageModule',
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
