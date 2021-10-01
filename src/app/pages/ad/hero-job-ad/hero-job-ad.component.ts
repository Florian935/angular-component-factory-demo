import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-hero-job-ad',
    templateUrl: './hero-job-ad.component.html',
    styleUrls: ['./hero-job-ad.component.scss'],
})
export class HeroJobAdComponent {
    @Input() data: any;
}
