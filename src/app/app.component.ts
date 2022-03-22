import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-crm';

  @ViewChild(MatDrawer) 
    drawer!: MatDrawer;
  

  constructor(private observer: BreakpointObserver, private cd: ChangeDetectorRef) {

  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 900px)']).subscribe((res) => {
      if(res.matches) {                         //for mobile
        this.drawer.mode = 'over';
        this.drawer.close();
        this.cd.detectChanges();
      } else {
        this.drawer.mode = 'side';
        this.drawer.open();
        this.cd.detectChanges();
      }
    });
  }
}
