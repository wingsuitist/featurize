import { Component, OnInit } from '@angular/core';

import { Feature, FeatureService } from '../shared';

@Component({
  selector: 'ftr-feature-top',
  templateUrl: './feature-top.component.html',
  styleUrls: ['./feature-top.component.css']
})
export class FeatureTopComponent implements OnInit {
  features: Feature[];

  constructor(private featureService: FeatureService) { }

  ngOnInit() {
    this.featureService.getFeatures()
      .subscribe(features => this.features = features);
  }

}
