import {
    Component,
    ComponentFactoryResolver,
    Input,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { AdDirective, AdItem } from 'src/app/shared';
import { AdService } from './ad.service';
import { tap } from 'rxjs/operators';
import { AdComponent } from 'src/app/shared/models/ad-component';

@Component({
    selector: 'app-ad-banner',
    templateUrl: './ad-banner.component.html',
    styleUrls: ['./ad-banner.component.scss'],
})
export class AdBannerComponent implements OnInit, OnDestroy {
    @ViewChild(AdDirective, { static: true }) adDirective!: AdDirective;
    private _ads: Array<AdItem> = [];
    private _intervalSubscription?: Subscription;
    private _currentAdIndex = -1;

    constructor(
        private _adService: AdService,
        private _componentFactoryResolver: ComponentFactoryResolver
    ) {}

    ngOnInit(): void {
        this._ads = this._adService.getAds();
        this.loadComponent();
        this.getAds();
    }

    loadComponent() {
        this._currentAdIndex = (this._currentAdIndex + 1) % this._ads.length;
        const adItem = this._ads[this._currentAdIndex];

        // Retrieves the factory object that creates a component of the given type
        const componentFactory =
            this._componentFactoryResolver.resolveComponentFactory<AdComponent>(
                adItem.component
            );

        const viewContainerRef = this.adDirective.viewContainerRef;

        // Destroys all views in this container.
        viewContainerRef.clear();

        // Instantiates a single component and inserts its host view into this container.
        const componentRef =
            viewContainerRef.createComponent<AdComponent>(componentFactory);
        componentRef.instance.data = adItem.data;
    }

    getAds() {
        this._intervalSubscription = interval(3000)
            .pipe(tap((_) => this.loadComponent()))
            .subscribe();
    }

    ngOnDestroy(): void {
        if (this._intervalSubscription) {
            this._intervalSubscription.unsubscribe();
        }
    }
}
