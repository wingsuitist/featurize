import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatureListComponent } from './feature-list/feature-list.component';
import { FeatureTopComponent } from './feature-top/feature-top.component';
import { FeatureEditComponent } from './feature-edit/feature-edit.component';
import { FeatureDetailComponent } from './feature-detail/feature-detail.component';

const routes: Routes = [
  { path: 'features/top', component: FeatureTopComponent },
  { path: 'features/add', component: FeatureEditComponent },
  { path: 'features/edit/:id', component: FeatureEditComponent },
  { path: 'features/:id', component: FeatureDetailComponent },
  { path: 'features', component: FeatureListComponent },
  { path: '', component: FeatureListComponent },
  { path: '**', component: FeatureListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
