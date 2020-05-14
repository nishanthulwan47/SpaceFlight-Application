import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  ParamMap } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { SpaceflightsService } from '../spaceflights.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

id: any;
data: any;

  constructor(private active: ActivatedRoute, private spaceflightService: SpaceflightsService, ) { }

  ngOnInit() {
    this.getLaunchDetails();
  }

  getLaunchDetails(){
    this.active.paramMap.subscribe(data => {
        this.id = data.get('id');
        console.log(this.id);
        this.getDataID(this.id);
    });
  }
  getDataID(id) {
    this.spaceflightService.getArticlesById(id).subscribe(data => {
      this.data = data;
      this.data = this.data.launches[0];
      console.log(this.data);
    });
  }

}
