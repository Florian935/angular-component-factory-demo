import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmbeddedViewComponent } from './components/create-embedded-view.component';

const routes: Routes = [{ path: '', component: CreateEmbeddedViewComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CreateEmbeddedViewRoutingModule {}
