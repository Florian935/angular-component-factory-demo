import {
    ChangeDetectorRef,
    Component,
    ComponentFactoryResolver,
    OnInit,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import { AdDirective } from 'src/app/shared';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@Component({
    selector: 'app-create-component',
    templateUrl: './create-component.component.html',
    styleUrls: ['./create-component.component.scss'],
})
export class CreateComponentComponent implements OnInit {
    @ViewChild(AdDirective, { static: true })
    private _adDirective!: AdDirective;

    constructor(
        private _viewContainerRef: ViewContainerRef,
        private _componentFactoryResolver: ComponentFactoryResolver,
        private _changeDetectorRef: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        // ! Injected at the bottom of the global DOM because the viewContainerRef refer
        // ! to the host container (which is here create-component component)
        const resolver =
            this._componentFactoryResolver.resolveComponentFactory<HelloWorldComponent>(
                HelloWorldComponent
            );
        const componentRef = this._viewContainerRef.createComponent(resolver);
        componentRef.instance.helloText = 'Hello World from create-component !';

        // ! Injected inside his host container which is the ng-template balise
        const resolver2 =
            this._componentFactoryResolver.resolveComponentFactory<HelloWorldComponent>(
                HelloWorldComponent
            );
        const componentRef2 =
            this._adDirective.viewContainerRef.createComponent(resolver2);
        componentRef2.instance.helloText = 'Hello World from ng-template !';
    }
}
