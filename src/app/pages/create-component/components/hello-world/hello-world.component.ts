import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-hello-world',
    templateUrl: './hello-world.component.html',
    styleUrls: ['./hello-world.component.scss'],
})
export class HelloWorldComponent {
    @Input() helloText?: string;

    constructor() {}
}
