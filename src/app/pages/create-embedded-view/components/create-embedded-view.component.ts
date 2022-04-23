import {
    AfterViewInit,
    Component,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';

@Component({
    selector: 'app-create-embedded-view',
    templateUrl: './create-embedded-view.component.html',
    styleUrls: ['./create-embedded-view.component.scss'],
})
export class CreateEmbeddedViewComponent implements AfterViewInit {
    @ViewChild('helloTemplate', { read: TemplateRef })
    private _helloTemplate!: TemplateRef<any>;
    @ViewChild('helloTemplateInNgContainer', { read: TemplateRef })
    private _helloTemplateInNgContainer!: TemplateRef<any>;
    @ViewChild('ngContainerViewRef', { read: ViewContainerRef })
    private _ngContainerViewRef!: ViewContainerRef;

    constructor(private _viewContainerRef: ViewContainerRef) {}

    ngAfterViewInit(): void {
        // ! /!\ A ng-template is always injected AT THE END of his host container /!\
        // ! See HTML code vs displayed HTML in browser to see a concret example.
        this._viewContainerRef.createEmbeddedView(this._helloTemplate);

        this._ngContainerViewRef.createEmbeddedView(
            this._helloTemplateInNgContainer
        );
    }
}
