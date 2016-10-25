import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FeatureListComponent } from './feature-list/feature-list.component';
import { FeatureTopComponent } from './feature-top/feature-top.component';
import { FeatureDetailComponent } from './feature-detail/feature-detail.component';
import { FeatureEditComponent } from './feature-edit/feature-edit.component';
import { NavigationComponent } from './navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureListComponent,
    FeatureTopComponent,
    FeatureDetailComponent,
    FeatureEditComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
