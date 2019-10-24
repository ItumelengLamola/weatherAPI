import { StationService } from './../../shared/station.service';
import { Component, OnInit } from '@angular/core';
import { Station } from 'src/app/model/station.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})


export class StationListComponent implements OnInit {
  
  allStation: Station[];
  searchTerm: string =" ";  
  

  constructor(
    private stationService: StationService, private _router: Router
  ) {}

  //if there is a problem
  ngOnInit() {
    this.getAllStations();
  }

  getOneStation(){
    this.stationService.getAllStations().subscribe(
      (data: Station[]) => {
          this.allStation = data;
      });
  }

  getAllStations() {
    this.stationService.getAllStations().subscribe(
      (data: Station[]) => {
          this.allStation = data;
      });
  }
}






