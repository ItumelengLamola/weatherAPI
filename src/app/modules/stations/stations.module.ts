import { StationService } from './../shared/station.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationComponent } from './station/station.component';
import { StationListComponent } from './station-list/station-list.component';



@NgModule({

  imports: [
    CommonModule
  ],
  declarations: [StationComponent, StationListComponent],
  exports: [StationComponent, StationListComponent],
  providers: [StationService]
})
export class StationsModule { }
