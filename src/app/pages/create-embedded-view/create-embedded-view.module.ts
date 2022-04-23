import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEmbeddedViewRoutingModule } from './create-embedded-view-routing.module';
import { CreateEmbeddedViewComponent } from './components/create-embedded-view.component';

@NgModule({
    declarations: [CreateEmbeddedViewComponent],
    imports: [CommonModule, CreateEmbeddedViewRoutingModule],
})
export class CreateEmbeddedViewModule {}
