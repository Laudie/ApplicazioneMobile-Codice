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
    {path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
