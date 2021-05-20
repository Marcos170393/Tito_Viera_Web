import { Component, OnInit , HostListener} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nav_animation=false;
  @HostListener("document:scroll")
  scrollFunction(){
    if(document.documentElement.scrollTop > 150){
      this.nav_animation = true;
    }else{
      this.nav_animation= false;
    }
  }

}
