import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponentComponent } from './components/create-component.component';

const routes: Routes = [{ path: '', component: CreateComponentComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CreateComponentRoutingModule {}
