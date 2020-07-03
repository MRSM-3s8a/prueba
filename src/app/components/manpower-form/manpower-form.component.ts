import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-manpower-form',
  templateUrl: './manpower-form.component.html',
  styleUrls: ['./manpower-form.component.css']
})
export class ManpowerFormComponent implements OnInit {

  @Input() truckType: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
