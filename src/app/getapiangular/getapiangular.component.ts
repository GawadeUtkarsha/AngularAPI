import { Component } from '@angular/core';
import { GetapiserviceService } from '../getapiservice.service';

@Component({
  selector: 'app-getapiangular',
  templateUrl: './getapiangular.component.html',
  styleUrls: ['./getapiangular.component.css']
})
export class GetapiangularComponent {
  apiData:any[]=[];
  getAPIData:any;

  constructor(private callApiService:GetapiserviceService)
  {}
  ngOnInit(){
    this.fetchApiData();
  }
  fetchApiData(){}
  clickMe()
  {
    this.callApiService.getApiData().subscribe(
    (data:any[])=>{
      this.apiData=data;
    },
    (error:any)=>
    {
      console.error('Error fetching Api Error,error');
    }
    );
  }

}
