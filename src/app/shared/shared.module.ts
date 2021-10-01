import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdDirective } from './directives/ad.directive';

@NgModule({
    declarations: [AdDirective],
    imports: [CommonModule],
    exports: [AdDirective],
})
export class SharedModule {}
