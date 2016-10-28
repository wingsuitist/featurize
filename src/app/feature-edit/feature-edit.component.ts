import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Feature, FeatureService } from '../shared';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ftr-feature-edit',
  templateUrl: './feature-edit.component.html',
  styleUrls: ['./feature-edit.component.css']
})
export class FeatureEditComponent implements OnInit {
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
