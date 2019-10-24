import { Station } from './../../model/station.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';


const headerOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable()
export class StationService {

  mockUrl = 'http://localhost:5200/stations';

  

  constructor(
    private http: HttpClient
  ) { }


getAllStations(): Observable<Station[]> {
    return this.http.get<Station[]>(this.mockUrl, headerOption);
  }
}
