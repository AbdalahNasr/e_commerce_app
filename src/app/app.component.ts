import { Component, OnInit } from '@angular/core';
import { SidebarService } from './service/sidebar.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// export class AppComponent  implements OnInit {
//   title = 'e_commerce_app';

//   // isShowSidebar: boolean = false;

//   // ngOnInit() {
//   //   this.updateComponentVisibility();
//   // }

//   // updateComponentVisibility() {
//   //   const isVisable = true; 

//   //   this.isShowSidebar = isVisable; 
//   // }

//   // isVisible = true  ;


//   isVisible: boolean = true ;


//   routesToHideSidebar : { [key: string]: boolean } = {
//     '/login': false,
//     '/signin': false,
//     '/home': false,
//     '/productDetails/:id': false,
//     '/cart': false,
//     '/': false,
//     '/**': false,
//     // '/addProduct':true
//   };


//   constructor(private router: Router, private sidebarService: SidebarService) {}

//   ngOnInit() {
//     // Subscribe to the sidebar visibility state
//     this.sidebarService.visibility$.subscribe(isVisible => {
//       this.isVisible = isVisible;
//     });

//        // Listen to route changes
//       //  this.router.events.subscribe(event => {
//       //   if (event instanceof NavigationEnd) {

//       //     if (event.url === '/login' || event.url === '/signin' || event.url === '/home' || event.url === '/productDetails/:id'   || event.url === '/cart'  || event.url === '/' || event.url === '/**' ) {
//       //       this.sidebarService.setVisibility(false);
//       //     } else {
//       //       this.sidebarService.setVisibility(true);
//       //     }
//       //   }
//       // });


//       this.router.events.subscribe(event => {
//         if (event instanceof NavigationEnd) {
//           const routePath = event.url.split('?')[0]; // Ignore query params
//           const shouldHideSidebar = [routePath as keyof typeof this.routesToHideSidebar]  || false;
//           this.sidebarService.setVisibility(!shouldHideSidebar);
//         }
//       });
//     }
    


// }


export class AppComponent implements OnInit {
  title = 'e_commerce_app';
  isVisible: boolean = false;

  routesToHideSidebar: { [key: string]: boolean } = {
    '/login': true,
    '/signin': true,
    '/home': true,
    '/productDetails/:id': true,
    '/cart': true,
    '/': true,
    '/**': true,
    '/addProduct': false
  };

  constructor(private router: Router, private sidebarService: SidebarService) {}

  ngOnInit() {
    // Subscribe to the sidebar visibility state
    this.sidebarService.visibility$.subscribe(isVisible => {
      this.isVisible = isVisible;
      console.log('Sidebar visibility:', this.isVisible);
    });

    // Listen to route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const routePath = event.url.split('?')[0]; // Ignore query params
        const shouldHideSidebar = this.routesToHideSidebar[routePath] !== undefined 
          ? this.routesToHideSidebar[routePath]
          : true; // Default to showing the sidebar if the route isn't found
          
        console.log(`Navigated to ${routePath}, shouldHideSidebar: ${shouldHideSidebar}`);
        
        this.sidebarService.setVisibility(!shouldHideSidebar);
      }
    });
  }
}
