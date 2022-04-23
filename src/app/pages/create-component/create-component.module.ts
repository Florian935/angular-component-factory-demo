import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateComponentRoutingModule } from './create-component-routing.module';
import { CreateComponentComponent } from './components/create-component.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [CreateComponentComponent, HelloWorldComponent],
    imports: [CommonModule, CreateComponentRoutingModule, SharedModule],
})
export class CreateComponentModule {}
