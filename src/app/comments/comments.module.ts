import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommentsComponent
  ],
  declarations: [CommentsComponent]
})
export class CommentsModule { }
