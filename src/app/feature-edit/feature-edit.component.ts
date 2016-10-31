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
  feature: Feature = new Feature({
    id: undefined,
    title: "",
    author: "",
    description: "",
    ratings: []
  });
  id: number;
  message: string = "";
  storing = false;

  constructor(private featureService: FeatureService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (parameters) => {
        if(parameters["id"] !== undefined) {
          this.id = parameters["id"];
          this.featureService.getFeature(parameters["id"])
            .subscribe(feature => this.feature = feature);
        }
      });
  }

  save() {
    this.storing = true;
    if(this.id !== undefined) {
      this.featureService.update(this.feature)
        .subscribe(response => {
          this.storing = false;
          this.message = `"${this.feature.title}" successfully stored.`
        });
    } else {
      this.featureService.add(this.feature)
        .subscribe(response => {
          this.storing = false;
          this.feature = new Feature(response);
          this.id = this.feature.id;
          this.message = `"${this.feature.title}" successfully added.`
        });
    }
  }

}
