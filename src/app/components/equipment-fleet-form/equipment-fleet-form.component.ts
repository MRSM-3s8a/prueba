import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-equipment-fleet-form',
  templateUrl: './equipment-fleet-form.component.html',
  styleUrls: ['./equipment-fleet-form.component.css']
})
export class EquipmentFleetFormComponent implements OnInit {

  @Input() title: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
