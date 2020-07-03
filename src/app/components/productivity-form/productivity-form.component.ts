import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-productivity-form',
  templateUrl: './productivity-form.component.html',
  styleUrls: ['./productivity-form.component.css']
})
export class ProductivityFormComponent implements OnInit {

  @Input() truckType: string;
  @Input() showTipPointInput: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
