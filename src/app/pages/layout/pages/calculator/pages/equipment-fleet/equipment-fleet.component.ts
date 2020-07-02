import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equipment-fleet',
  templateUrl: './equipment-fleet.component.html',
  styleUrls: ['./equipment-fleet.component.css']
})
export class EquipmentFleetComponent implements OnInit {

  menuActivated: string;
  ALLOWED_ROUTES = [
    'loaders',
    'trucks',
    'jumbos',
    'longhole',
    'charger',
    'forklifts',
    'lvs',
    'others',
  ]
  constructor(
    public activatedRoute: ActivatedRoute
  ) { 
    
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((params) => {
      const menuOption = params['menuOption'];
      if (this.ALLOWED_ROUTES.includes(menuOption))
        this.menuActivated = menuOption;
      else
        this.menuActivated = this.ALLOWED_ROUTES[0];
    });
  }

}
