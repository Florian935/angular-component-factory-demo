import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'ad-banner',
        loadChildren: () =>
            import('./pages/ad/ad.module').then((m) => m.AdModule),
    },
    {
        path: 'create-embedded-view',
        loadChildren: () =>
            import(
                './pages/create-embedded-view/create-embedded-view.module'
            ).then((m) => m.CreateEmbeddedViewModule),
    },
    {
        path: 'create-component',
        loadChildren: () =>
            import('./pages/create-component/create-component.module').then(
                (m) => m.CreateComponentModule
            ),
    },
    { path: '', redirectTo: 'ad-banner', pathMatch: 'full' },
    { path: '**', redirectTo: 'ad-banner' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
