import { Component, OnInit, Input } from '@angular/core';
import { TelcoService } from '../services/telco.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private telcoservice: TelcoService) {}

  ngOnInit() {
    // this.getDataService(2); SWAPI
  }

  public sentDataService(data1: any, data2: any, data3: any){
    this.telcoservice.sentData(data1, data2, data3)
      .subscribe((response: any) => {
        console.log(response);
      });
  }

  public getDataService(data1: any){
    this.telcoservice.getData(data1)
     .subscribe((response: any)=> {
       console.log(response);
     });  
  }

}
