import { Component, OnInit } from '@angular/core';
import { SidebarService } from './service/sidebar.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'e_commerce_app';

  // isShowSidebar: boolean = false;

  // ngOnInit() {
  //   this.updateComponentVisibility();
  // }

  // updateComponentVisibility() {
  //   const isVisable = true; 

  //   this.isShowSidebar = isVisable; 
  // }

  // isVisible = true  ;


  isVisible: boolean = true;
  constructor(private router: Router, private sidebarService: SidebarService) {}

  ngOnInit() {
    // Subscribe to the sidebar visibility state
    this.sidebarService.visibility$.subscribe(isVisible => {
      this.isVisible = isVisible;
    });

       // Listen to route changes
       this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {

          if (event.url === '/login' || event.url === '/signin' || event.url === '/home' || event.url === '/productDetails'   || event.url === '/cart'  || event.url === '/' || event.url === '/**' ) {
            this.sidebarService.setVisibility(false);
          } else {
            this.sidebarService.setVisibility(true);
          }
        }
      });
    }


}

