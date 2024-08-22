import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'e_commerce_app';

  showSidebar: boolean = false;

  ngOnInit() {
    this.updateComponentVisibility();
  }

  updateComponentVisibility() {
    const visable = false; 

    this.showSidebar = visable; 
  }
}
