import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'


@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  constructor(private dataP: DataService) { }
 dataT:any

  ngOnInit(): void {
    this.getHer()
    //console.log(this.dataT)

  }
  getHer(): void {
    this.dataT = this.dataP.getData().subscribe((response: any) => {
      this.dataT = response
        console.log(this.dataT)
      //console.log(response)
      //console.log(this.launches)
    })

  }





}
