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
  isButtonDivVisible:any = true;

  toggleDivs() {
    this.isButtonDivVisible = !this.isButtonDivVisible;
  }
ngOnInit(): void {
    this.vinNumber =  this.activeRoute.snapshot.params['vinNumber']
    this.wheelsData.forEach(wheel => {
      wheel.checked = false;
    });  this.logo.forEach(logo => {
      logo.checked = false;
    });
    console.log(this.wheelsData)
    // this.http.get(`http://192.168.29.78:8000/api/scan/${this.vinNumber}`).subscribe(
    //   (res) => {
    //     console.log("response", res);
    //     // this.getImages()
    //   },
    //   (error) => {
    //     console.error("Error occurred:", error);
    //   }
    // );

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
baseUrl='http://192.168.29.78:8000/api'
wheelsData:any[]=[
  {
    "id": 1,
    "title": "Wheel",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1VMQzlDsK2czEifi1Ixz_OKI46R1dH_NFxcTkGFYjPA&s"
  },
  {
    "id": 2,
    "title": "Wheel",
    "image": "https://cdn1.vectorstock.com/i/1000x1000/43/85/car-wheel-vector-34385.jpg"
  },
  {
    "id": 3,
    "title": "Wheel",
    "image": "https://static6.depositphotos.com/1096434/587/v/450/depositphotos_5874149-stock-illustration-car-wheel.jpg"
  }
];
logo:any[]=[
  {
    "id": 1,
    "title": "Wheel",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1VMQzlDsK2czEifi1Ixz_OKI46R1dH_NFxcTkGFYjPA&s"
  },
  {
    "id": 2,
    "title": "Wheel",
    "image": "https://cdn1.vectorstock.com/i/1000x1000/43/85/car-wheel-vector-34385.jpg"
  },
  {
    "id": 3,
    "title": "Wheel",
    "image": "https://static6.depositphotos.com/1096434/587/v/450/depositphotos_5874149-stock-illustration-car-wheel.jpg"
  }
];
// getImages(){
//   this.http.get('http://192.168.29.78:8000/api/wheelimages/').subscribe((res:any)=>{
//     this.wheelsData=res.WheelImages;

//   })
// }
selectedImages:any[]=[]
handleCheckboxChange(index: number): void {
  const selectedWheel = this.wheelsData[index];

  // Toggle the checked state
  selectedWheel.checked = !selectedWheel.checked;

  // Add or remove from the selectedImages array based on the checked state
  if (selectedWheel.checked) {
    this.selectedImages.push(selectedWheel.image);
  } else {
    const indexToRemove = this.selectedImages.indexOf(selectedWheel.image);
    if (indexToRemove !== -1) {
      this.selectedImages.splice(indexToRemove, 1);
    }
  }
}
isSubmitted: boolean = false;
submit(): void {
  this.isSubmitted = true;
}
back(){
  this.isButtonDivVisible=true
  if(this.isSubmitted==true){
    this.isSubmitted = false;
  }
}
}
