import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard-after-scan',
  templateUrl: './dashboard-after-scan.component.html',
  styleUrls: ['./dashboard-after-scan.component.scss']
})
export class DashboardAfterScanComponent implements OnInit {
vinNumber:any
  constructor(private activeRoute:ActivatedRoute,private http:HttpClient){

  }
  isButtonDivVisible = true;
  back(){
    this.isButtonDivVisible=true
  }
  toggleDivs() {
    this.isButtonDivVisible = !this.isButtonDivVisible;
  }
ngOnInit(): void {
    this.vinNumber =  this.activeRoute.snapshot.params['vinNumber']
    this.http.get(`http://192.168.29.78:8000/api/scan/${this.vinNumber}`).subscribe(res=>{
      console.log("response", res)
    })
}

activeDiv: number = 1;
switchDiv(divNumber: number) {
  this.activeDiv = divNumber;
}
next(){
  this.activeDiv++
  if(this.activeDiv>4){
    this.activeDiv=1
  }
}
}
