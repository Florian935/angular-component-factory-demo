import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'ad-banner',
        loadChildren: () =>
            import('./pages/ad/ad.module').then((m) => m.AdModule),
    },
    { path: '', redirectTo: 'ad-banner', pathMatch: 'full' },
    { path: '**', redirectTo: 'ad-banner' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
