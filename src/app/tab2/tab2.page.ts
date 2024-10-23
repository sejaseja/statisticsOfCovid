import { Component, OnInit } from '@angular/core';
import { AsgtotabService } from '../asgtotab.service';
import { Router } from '@angular/router';
import { AsgService } from '../asg.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  items: any[] = [];
  message: any;
   
  constructor(
    private asgtotabService: AsgtotabService,
    private router: Router,
    private asgService: AsgService,
    private navController: NavController

  ) {}

  ngOnInit(){
    this.asgtotabService.fetchData().subscribe(data => {
      this.items = data;
    });

    this.asgService.currentMessage.subscribe(message => {
      this.message=message;
    });
  }

  selectItem(item: any){
    this.asgtotabService.setitemSelected(item);
    this.router.navigate(['/page1']);
  }

  goToOtherPage(){
    this.navController.navigateForward('/page1');
  }

}
