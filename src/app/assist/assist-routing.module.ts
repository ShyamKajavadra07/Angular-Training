import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistComponent } from './assist.component';

const routes: Routes = [{ path: '', component: AssistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistRoutingModule { }
