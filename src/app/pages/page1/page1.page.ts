import { Component, OnInit } from '@angular/core';
import { AsgService } from 'src/app/asg.service';
import { AsgtotabService } from 'src/app/asgtotab.service';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  itemSelected: any;
  message: string='';

  constructor(private asgService: AsgService, private asgtotabService: AsgtotabService ) { }

  ngOnInit() {
    this.itemSelected = this.asgtotabService.getitemSelected();

  }

  sendMessage(){
    this.asgService.sendMessage(this.message);
  }

}
