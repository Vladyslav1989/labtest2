import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  private REST_API_END_POINT = "https://api.spacexdata.com/v3/launches/";
  UserDtails:any

  constructor(private activatedRoutecc: ActivatedRoute,private httpClient: HttpClient) { }

  ngOnInit(): void {
    let id = this.activatedRoutecc.snapshot.paramMap.get('id')
    console.log(id)
    //make Http call to fetch user data
    this.httpClient.get(`${this.REST_API_END_POINT}${id}`).subscribe((response: any) => {

      console.log(response)
      this.UserDtails = response

    })
  }
  }


