import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdRoutingModule } from './ad-routing.module';
import { AdBannerComponent } from './ad-banner.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';

@NgModule({
    declarations: [AdBannerComponent, HeroJobAdComponent, HeroProfileComponent],
    imports: [CommonModule, AdRoutingModule, SharedModule],
})
export class AdModule {}
