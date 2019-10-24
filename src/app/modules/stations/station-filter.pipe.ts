import { Station } from './../../model/station.model';
import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name: 'stationFilter'
})

export class StationFilterPipe implements PipeTransform {
    transform(stations: Station[], searchTerm: string): Station[] {
        if (!stations || !searchTerm){
            return stations;
        }
        return stations.filter(station =>
            station.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}