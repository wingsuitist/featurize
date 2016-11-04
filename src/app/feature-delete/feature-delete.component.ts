import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { Feature, FeatureService } from '../shared';

@Component({
  selector: 'ftr-feature-delete',
  templateUrl: './feature-delete.component.html',
  styleUrls: ['./feature-delete.component.css']
})
export class FeatureDeleteComponent implements OnInit {
  @Input()
  feature: Feature;

  @Output()
  onDelete = new EventEmitter();

  approveDelete = false;

  constructor(private featureService: FeatureService) { }

  ngOnInit() {
  }

  checkDelete() {
    this.approveDelete = true;
  }

  deleteNow() {
    this.approveDelete = false;
    this.featureService.delete(this.feature.id)
      .subscribe(response => {
        this.onDelete.emit(response);
      })
  }

}
