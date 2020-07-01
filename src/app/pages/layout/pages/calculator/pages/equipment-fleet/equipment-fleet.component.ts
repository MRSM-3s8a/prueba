import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equipment-fleet',
  templateUrl: './equipment-fleet.component.html',
  styleUrls: ['./equipment-fleet.component.css']
})
export class EquipmentFleetComponent implements OnInit {

  menuActivated: string;
  constructor(
    public activatedRoute: ActivatedRoute
  ) { 
    
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.menuActivated = params['menuOption'];
    });
  }

}
