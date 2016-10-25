import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatureListComponent } from './feature-list/feature-list.component';
import { FeatureTopComponent } from './feature-top/feature-top.component';
import { FeatureEditComponent } from './feature-edit/feature-edit.component';
import { FeatureDetailComponent } from './feature-detail/feature-detail.component';

const routes: Routes = [
  { path: 'features', component: FeatureListComponent },
  { path: 'top', component: FeatureTopComponent },
  { path: 'add', component: FeatureEditComponent },
  { path: 'edit/:id', component: FeatureEditComponent },
  { path: 'detail/:id', component: FeatureDetailComponent },
  { path: '', component: FeatureTopComponent },
  { path: '**', component: FeatureTopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
