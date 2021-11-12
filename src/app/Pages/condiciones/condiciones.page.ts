import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular'; 

@Component({
  selector: 'app-condiciones',
  templateUrl: './condiciones.page.html',
  styleUrls: ['./condiciones.page.scss'],
})
export class CondicionesPage implements OnInit {

  constructor(private pop:PopoverController) { }

  ngOnInit() {
  }

  ClosePopover(){
    
    this.pop.dismiss();
  }


}
