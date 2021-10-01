import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdBannerComponent } from './ad-banner.component';

const routes: Routes = [{ path: '', component: AdBannerComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdRoutingModule {}
