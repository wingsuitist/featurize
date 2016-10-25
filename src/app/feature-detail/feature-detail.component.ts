import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Feature, FeatureService } from '../shared';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ftr-feature-detail',
  templateUrl: './feature-detail.component.html',
  styleUrls: ['./feature-detail.component.css']
})
export class FeatureDetailComponent implements OnInit {
  feature: Feature;
  id: number;

  constructor(private featureService: FeatureService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (parameters) => {
        this.featureService.getFeature(parameters["id"])
          .subscribe(feature => this.feature = feature);
      });
  }

}
