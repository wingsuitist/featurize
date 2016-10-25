import { Component, OnInit } from '@angular/core';

import { Feature, FeatureService } from '../shared';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ftr-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.css']
})
export class FeatureListComponent implements OnInit {
  features: Observable<Feature[]>;

  constructor(private featureService: FeatureService) { }

  ngOnInit() {
    this.features = this.featureService.getFeatures();
  }
}
