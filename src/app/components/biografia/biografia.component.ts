import { Component, OnInit , HostListener} from '@angular/core';

@Component({
  selector: 'app-biografia',
  templateUrl: './biografia.component.html',
  styleUrls: ['./biografia.component.css']
})
export class BiografiaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  img_animation_1=false;
  img_animation_2=false;
  img_animation_3=false;
  
  @HostListener("document:scroll")
  scrollFunction(){
    if(document.documentElement.scrollTop > 600){
      this.img_animation_1 = true;
    }
    if(document.documentElement.scrollTop > 1000){
      this.img_animation_2 = true;
    }
    if(document.documentElement.scrollTop >1700){
      this.img_animation_3 = true;
    }
    
  }
  

 
    


}
