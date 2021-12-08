import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from '../edit/edit.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NewComponent } from '../new/new.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component : DashboardComponent
  },
  {
    path: 'new',
    component: NewComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: '**',
    component: DashboardComponent
  }

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
