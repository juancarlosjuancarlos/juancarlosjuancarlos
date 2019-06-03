import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
public planta:any;
  constructor(private route:ActivatedRoute,private router:Router, public nav:NavController) {
	this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.planta = JSON.parse(params.special);
      }
    });
  }

  ngOnInit() {
  	console.log(this.planta);
  }

}
