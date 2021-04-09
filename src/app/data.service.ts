import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_END_POINT = "https://api.spacexdata.com/v3/launches";
  launches:any = []
   data = this.httpClient.get(this.REST_API_END_POINT).subscribe((response: any) => {
    this.launches = response
    return response
    //console.log(this.launches)
  })

  constructor(private httpClient: HttpClient) { }


  getData():Observable<any>{
    //console.log(this.data)
    //const heroes = of(this.launches);
    //console.log(heroes)
    return this.httpClient.get(this.REST_API_END_POINT);

    //return this.launches
  }

}
